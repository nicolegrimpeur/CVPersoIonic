import {RenderMode, ServerRoute} from '@angular/ssr';

// Pages générées en HTML statique au moment du build (lisibles sans JavaScript)
export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
