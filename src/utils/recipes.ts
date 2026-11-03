export function formatCategory(cat?: string): string {
  if (!cat) return 'Mains';
  const c = cat.toLowerCase().trim();
  if (c.includes('curry') || c.includes('curries')) return 'Curries';
  if (c.includes('soup')) return 'Soups';
  if (c.includes('baking') || c.includes('bake') || c.includes('bread')) return 'Baking';
  if (c.includes('main')) return 'Mains';
  return cat.charAt(0).toUpperCase() + cat.slice(1);
}

export function getCategoryBadge(cat?: string) {
  const c = (cat || '').toLowerCase().trim();
  if (c.includes('curry') || c.includes('curries')) {
    return {
      name: 'Curries',
      bgClass: 'bg-amber-100 text-amber-900 border-amber-300',
      dotClass: 'bg-amber-500',
    };
  }
  if (c.includes('soup')) {
    return {
      name: 'Soups',
      bgClass: 'bg-emerald-100 text-emerald-900 border-emerald-300',
      dotClass: 'bg-emerald-500',
    };
  }
  if (c.includes('baking') || c.includes('bake') || c.includes('bread')) {
    return {
      name: 'Baking',
      bgClass: 'bg-yellow-100 text-yellow-950 border-yellow-300',
      dotClass: 'bg-yellow-600',
    };
  }
  return {
    name: 'Mains',
    bgClass: 'bg-orange-100 text-orange-900 border-orange-300',
    dotClass: 'bg-orange-500',
  };
}

export function getServings(body: string): string | null {
  const match = body.match(/(?:serves|makes)[^\S\r\n]*:?[^\S\r\n]*([0-9]+(?:[^\S\r\n]*-[^\S\r\n]*[0-9]+)?)/i);
  return match ? `Serves ${match[1].trim()}` : null;
}

export function getPrepCookTime(body: string): { prep: string | null; cook: string | null } {
  const prepMatch = body.match(/prep[^\S\r\n]*:?[^\S\r\n]*([0-9]+[^\S\r\n]*(?:min|mins|minutes|h|hr|hours)?)/i);
  const cookMatch = body.match(/cook[^\S\r\n]*:?[^\S\r\n]*([0-9]+[^\S\r\n]*(?:min|mins|minutes|h|hr|hours)?)/i);
  return {
    prep: prepMatch ? `Prep ${prepMatch[1].trim()}` : null,
    cook: cookMatch ? `Cook ${cookMatch[1].trim()}` : null,
  };
}

export function getExcerpt(body: string): string {
  // Strip frontmatter if passed
  const lines = body.split('\n');
  const cleanLines: string[] = [];
  let inFrontmatter = false;
  
  for (const line of lines) {
    if (line.trim() === '---') {
      inFrontmatter = !inFrontmatter;
      continue;
    }
    if (inFrontmatter) continue;
    if (line.startsWith('#')) break; // Stop at first heading
    const trimmed = line.trim();
    if (!trimmed) continue;
    if (/^(serves|prep|cook)\b/i.test(trimmed)) continue;
    cleanLines.push(trimmed);
  }
  
  return cleanLines.slice(0, 2).join(' ');
}

export function getTags(indexEntry?: string): string[] {
  if (!indexEntry) return [];
  return indexEntry
    .split(',')
    .map((t) => t.trim().toLowerCase())
    .filter((t) => t.length > 0);
}
