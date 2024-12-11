import { renderHeader } from "./header";
import { renderFooter } from "./footer";

const renderRow = ({ label, value }: { label: string; value: string }) => {
  if (value) {
    return `
            <span style="color:rgba(255, 255, 255, 0.5)">${label}</span>: ${value}
            <br />
        `;
  }

  return "";
};

export const contactReceivedEmail = {
  title: "Você recebeu um contato!",
  mjmlHtml: ({
    name,
    email,
    message,
  }: {
    name: string;
    email: string;
    message: string;
  }) => `
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

                    <mj-section border-radius="4px 4px 0px 0px" padding="32px 32px 16px 32px" background-color="#0b0b0b">
                        <mj-column>
                            <mj-text mj-class="title">
                                Lucas!
                            </mj-text>
                            <mj-text mj-class="text">
                                Você recebeu um novo contato
                            </mj-text>
                        </mj-column>
                    </mj-section>
              
                    ${
                      message
                        ? `
                        <mj-section border-radius="4px 4px 0px 0px" padding="0 32px 0 32px" background-color="#0b0b0b">
                                <mj-column background-color="#131313" padding="16px 16px 0"  border-radius="8px">
                                    <mj-text mj-class="text">
                                        Mensagem: ${message}
                                    </mj-text>
                                </mj-column>
                        </mj-section>
                    `
                        : ""
                    }
                    
              
                    <mj-section border-radius="0px 0px 4px 4px" padding="16px 32px 16px 32px" background-color="#0b0b0b">
                        <mj-column>
                            <mj-text mj-class="text"> 
                                ${renderRow({
                                  label: "Nome",
                                  value: name,
                                })}                   
                                ${renderRow({ label: "E-mail", value: email })}
                            </mj-text>
                        </mj-column>

                    </mj-section>   

                    ${renderFooter({ email: "lucas.costamaral@gmail.com" })}

                </mj-wrapper>
            </mj-body>
        </mjml>
    `,
};
