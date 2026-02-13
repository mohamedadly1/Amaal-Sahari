import { put } from '@vercel/blob'
import { type NextRequest, NextResponse } from 'next/server'

// Increase timeout for large file uploads
export const maxDuration = 60 // 60 seconds for upload

export async function POST(request: NextRequest) {
  try {
    console.log('[v0] Upload endpoint called')
    
    // Check if Blob token is available
    if (!process.env.BLOB_READ_WRITE_TOKEN) {
      console.error('[v0] BLOB_READ_WRITE_TOKEN not set')
      return NextResponse.json(
        { error: 'Upload service not configured' },
        { status: 500 }
      )
    }

    const formData = await request.formData()
    const file = formData.get('file') as File

    if (!file) {
      console.error('[v0] No file provided')
      return NextResponse.json({ error: 'No file provided' }, { status: 400 })
    }

    console.log('[v0] Uploading file:', file.name, 'Type:', file.type, 'Size:', file.size)

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'video/mp4', 'video/webm']
    if (!allowedTypes.includes(file.type)) {
      console.error('[v0] Invalid file type:', file.type)
      return NextResponse.json(
        { error: `Invalid file type: ${file.type}. Allowed: JPEG, PNG, WebP, MP4, WebM` },
        { status: 400 }
      )
    }

    // Validate file size (50MB max)
    const maxSize = 50 * 1024 * 1024
    if (file.size > maxSize) {
      console.error('[v0] File too large:', file.size)
      return NextResponse.json(
        { error: `File too large (${(file.size / 1024 / 1024).toFixed(2)}MB). Maximum size is 50MB` },
        { status: 400 }
      )
    }

    // Convert File to Buffer for put() method
    console.log('[v0] Converting file to buffer')
    const buffer = await file.arrayBuffer()
    const timestamp = Date.now()
    
    // Sanitize filename - remove special characters and spaces
    const sanitizedName = file.name
      .replace(/[^a-zA-Z0-9.-]/g, '-')
      .replace(/--+/g, '-')
      .toLowerCase()
    const filename = `${timestamp}-${sanitizedName}`
    
    console.log('[v0] Starting blob upload with filename:', filename)
    const blob = await put(filename, buffer, {
      access: 'public',
      contentType: file.type,
    })
    console.log('[v0] Blob upload successful:', blob.url)

    return NextResponse.json({
      url: blob.url,
      filename: file.name,
      size: file.size,
      type: file.type,
    })
  } catch (error) {
    console.error('[v0] Upload error details:', error)
    const errorMessage = error instanceof Error ? error.message : String(error)
    console.error('[v0] Upload error message:', errorMessage)
    return NextResponse.json(
      { error: `Upload failed: ${errorMessage}` },
      { status: 500 }
    )
  }
}
