// utils/disableRightClick.ts
export function applyContextMenuHandler(string: string) {
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
      document.addEventListener('contextmenu', (event) => {
        event.preventDefault();
      });
    }
  }
  