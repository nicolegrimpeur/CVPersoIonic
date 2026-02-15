import { Badge } from './badge';

// Unit tests for the Badge helper class.
// They verify logo formatting, color retrieval and link generation.

describe('Badge class', () => {
  let badge: Badge;

  beforeEach(() => {
    badge = new Badge();
  });

  // getLogoFromText should handle special characters
  it('should convert text to logo format', () => {
    expect(badge.getLogoFromText('C++')).toBe('cplusplus');
  });

  // getColorFromText should return matching color or a default
  it('should return color from text', () => {
    expect(badge.getColorFromText('Angular')).toBe('0F0F11');
    expect(badge.getColorFromText('Bison')).toBe('181717');
    expect(badge.getColorFromText('Unknown')).toBe('181717');
  });

  // getLink builds a shield.io URL
  it('should build link', () => {
    const link = badge.getLink('Angular');
    expect(link).toBe(
      'https://img.shields.io/badge/Angular-0F0F11?logo=angular&logoColor=white'
    );
  });
});
