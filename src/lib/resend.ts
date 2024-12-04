import { env } from 'src/t3-env';
import { Resend } from 'resend';

const resend = new Resend(env.RESEND_API_KEY);

export { resend };
