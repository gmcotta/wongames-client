import Auth from 'templates/Auth'

import ForgotPasswordForm from 'components/ForgotPasswordForm'

export default function ForgotPasswordPage() {
  return (
    <Auth title="Request new password">
      <ForgotPasswordForm />
    </Auth>
  )
}
