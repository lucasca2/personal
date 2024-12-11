export const renderFooter = ({
    email
}: {
    email: string
}) => `
    <mj-section padding="32px 0">
        <mj-column padding="0">
            <mj-text mj-class="text" padding-bottom="0">
            Esse email foi enviado para <a style="color:#5a86e8; text-decoration: underline">${email}</a>.
            </mj-text>
        </mj-column>
    </mj-section>
`