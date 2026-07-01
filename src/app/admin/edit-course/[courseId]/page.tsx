import { redirect } from 'next/navigation';

/**
 * @fileOverview Handles legacy admin edit links by redirecting to the home page,
 * as admin features are currently restricted in the prototype.
 */
export default function AdminEditRedirect() {
  redirect('/');
}
