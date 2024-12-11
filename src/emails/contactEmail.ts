import { renderHeader } from "./header";
import { renderFooter } from "./footer";

export const contactEmail = {
  title: "Obrigado pelo contato!",
  mjmlHtml: ({ email, name }: { email: string; name: string }) => `
        <mjml>
            <mj-head>
            <mj-attributes>
                <mj-class name="text" padding="0" font-size="14px" line-height="24px" font-family="Arial" padding-bottom="16px" color="#fff" />
                <mj-class name="button" padding="0" font-family="Arial" align="left" background-color="#FA7E38" inner-padding="8px 16px" height="40px" border-radius="4px" color="#fff" />

                <mj-class name="title" padding="0" font-size="24px" line-height="24px" font-family="Arial" font-weight="bold" padding-bottom="16px" color="#fff" />
            </mj-attributes>
            </mj-head>
            <mj-body>
                <mj-wrapper background-color="#111" full-width="full-width" padding="16px">
                    
                    ${renderHeader()}

                    <mj-section border-radius="4px" padding="32px 32px 16px 32px" background-color="#0b0b0b">
                        <mj-column>
                            <mj-text mj-class="title">
                                Olá ${name},
                            </mj-text>
                            <mj-text mj-class="text">
                                Obrigado pelo seu contato!
                                <br />
                                Em breve, eu entratei em contato com você!
                            </mj-text>
                        </mj-column>
                    </mj-section>

                    ${renderFooter({ email })}

                </mj-wrapper>
            </mj-body>
        </mjml>
    `,
};
