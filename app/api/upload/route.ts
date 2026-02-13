import { type NextRequest, NextResponse } from 'next/server'

// Increase timeout for large file uploads
export const maxDuration = 60 // 60 seconds for upload

export async function POST(request: NextRequest) {
  try {
    console.log('[v0] Upload endpoint called')
    
    // Get Hostinger upload URL from environment variable
    const hostingerUploadUrl = process.env.HOSTINGER_UPLOAD_URL
    if (!hostingerUploadUrl) {
      console.error('[v0] HOSTINGER_UPLOAD_URL not set')
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

    // Convert File to FormData for Hostinger
    console.log('[v0] Preparing file for Hostinger upload')
    const uploadFormData = new FormData()
    uploadFormData.append('file', file)

    // Upload to Hostinger
    console.log('[v0] Sending to Hostinger:', hostingerUploadUrl)
    let response
    try {
      response = await fetch(hostingerUploadUrl, {
        method: 'POST',
        body: uploadFormData,
      })
    } catch (fetchError) {
      console.error('[v0] Network error connecting to Hostinger:', fetchError)
      return NextResponse.json(
        { error: `Cannot connect to Hostinger: ${fetchError instanceof Error ? fetchError.message : 'Unknown error'}` },
        { status: 500 }
      )
    }

    console.log('[v0] Hostinger response status:', response.status)
    
    if (!response.ok) {
      const errorText = await response.text()
      console.error('[v0] Hostinger upload failed:', response.status, errorText)
      return NextResponse.json(
        { error: `Upload to Hostinger failed with status ${response.status}. Details: ${errorText}` },
        { status: 500 }
      )
    }

    let data
    try {
      data = await response.json()
    } catch (jsonError) {
      console.error('[v0] Failed to parse Hostinger response:', jsonError)
      const responseText = await response.text()
      console.error('[v0] Response text:', responseText)
      return NextResponse.json(
        { error: `Invalid response from Hostinger: ${responseText}` },
        { status: 500 }
      )
    }

    console.log('[v0] Hostinger upload successful:', data.url)

    return NextResponse.json({
      url: data.url,
      filename: data.filename,
      size: data.size,
      type: data.type,
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
