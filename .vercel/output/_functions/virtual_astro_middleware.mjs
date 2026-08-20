import { d as defineMiddleware, s as sequence } from './chunks/sequence_Dx250nHY.mjs';
import 'piccolore';
import 'clsx';

const onRequest$1 = defineMiddleware(async (_ctx, next) => {
  const response = await next();
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
  return response;
});

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
