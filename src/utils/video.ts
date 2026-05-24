export function getYouTubeVideoId(url: string | null | undefined): string | null {
  if (!url) return null

  const trimmed = url.trim()
  if (!trimmed) return null

  try {
    const parsedUrl = new URL(trimmed)
    
    if (parsedUrl.hostname === 'youtu.be') {
      return parsedUrl.pathname.slice(1)
    }

    if (parsedUrl.hostname.includes('youtube.com')) {
      if (parsedUrl.pathname.startsWith('/shorts/')) {
        return parsedUrl.pathname.split('/')[2] ?? null
      }
      
      if (parsedUrl.pathname === '/watch') {
        return parsedUrl.searchParams.get('v')
      }
    }
  } catch {
    return null
  }

  return null
}
