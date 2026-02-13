<?php
// CORS headers - السماح بالطلبات من Vercel
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// المجلد حيث سيتم حفظ الملفات
$uploadsDir = 'uploads/';

// تأكد من وجود المجلد
if (!is_dir($uploadsDir)) {
    mkdir($uploadsDir, 0755, true);
}

// التحقق من وجود ملف
if (!isset($_FILES['file'])) {
    http_response_code(400);
    echo json_encode(['error' => 'No file provided']);
    exit;
}

$file = $_FILES['file'];

// التحقق من أخطاء الرفع
if ($file['error'] !== UPLOAD_ERR_OK) {
    http_response_code(400);
    echo json_encode(['error' => 'Upload failed: ' . $file['error']]);
    exit;
}

// أنواع الملفات المسموحة
$allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'video/mp4', 'video/webm'];
if (!in_array($file['type'], $allowedTypes)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid file type: ' . $file['type']]);
    exit;
}

// حد أقصى للحجم (50 MB)
$maxSize = 50 * 1024 * 1024;
if ($file['size'] > $maxSize) {
    http_response_code(400);
    echo json_encode(['error' => 'File too large: ' . ($file['size'] / 1024 / 1024) . 'MB']);
    exit;
}

// تنظيف اسم الملف
$originalName = $file['name'];
$sanitized = preg_replace('/[^a-zA-Z0-9.-]/', '-', $originalName);
$sanitized = preg_replace('/--+/', '-', $sanitized);
$sanitized = strtolower($sanitized);

// إنشاء اسم فريد
$timestamp = time();
$newFilename = $timestamp . '-' . $sanitized;
$uploadPath = $uploadsDir . $newFilename;

// رفع الملف
if (move_uploaded_file($file['tmp_name'], $uploadPath)) {
    // الحصول على رابط الملف
    $protocol = isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? 'https' : 'http';
    $host = $_SERVER['HTTP_HOST'];
    $fileUrl = $protocol . '://' . $host . '/' . $uploadPath;
    
    http_response_code(200);
    echo json_encode([
        'url' => $fileUrl,
        'filename' => $originalName,
        'size' => $file['size'],
        'type' => $file['type']
    ]);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to save file']);
}
?>
