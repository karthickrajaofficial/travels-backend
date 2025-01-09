// backend/templates/adminEmailTemplate.js

function createAdminEmailTemplate(data) {
    return `
  <!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="x-apple-disable-message-reformatting">
    <!--[if !mso]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->
    <title></title>
    <style type="text/css">
      @media only screen and (min-width: 620px) {
        .u-row { width: 600px !important; }
        .u-row .u-col { vertical-align: top; }
        .u-row .u-col-100 { width: 600px !important; }
      }
      @media (max-width: 620px) {
        .u-row-container { max-width: 100% !important; padding-left: 0px !important; padding-right: 0px !important; }
        .u-row .u-col { min-width: 320px !important; max-width: 100% !important; display: block !important; }
        .u-row { width: 100% !important; }
        .u-col { width: 100% !important; }
        .u-col > div { margin: 0 auto; }
      }
    </style>
  </head>
  
  <body style="margin: 0; background-color: #f1f5f9; padding: 0; -webkit-text-size-adjust: 100%; font-family: Arial, Helvetica, sans-serif;">
    <table cellpadding="0" cellspacing="0" width="100%" bgcolor="#f1f5f9" style="border-collapse: collapse; table-layout: fixed; border-spacing: 0; vertical-align: top;">
      <tr style="vertical-align: top">
        <td style="word-break: break-word; border-collapse: collapse !important; vertical-align: top;">
          <div class="u-row-container">
            <table width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td style="padding: 0px;">
                  <table width="600" style="margin: 0 auto; min-width: 320px; max-width: 600px;" cellpadding="0" cellspacing="0" border="0" bgcolor="#ffffff">
  
                    <!-- Header -->
                    <tr>
                      <td bgcolor="#1e3a8a" style="padding: 40px 10px;" align="center">
                        <table width="100%" cellpadding="0" cellspacing="0" border="0">
                          <tr>
                            <td align="center">
                              <h1 style="margin: 0; color: #fbbf24; font-family: Arial, Helvetica, sans-serif; font-size: 24px; font-weight: 700;">NEW TRAVEL INQUIRY</h1>
                              <p style="margin: 10px 0 0; color: #ffffff; font-size: 16px;">A new customer inquiry requires your attention</p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
  
                    <!-- Customer Details -->
                    <tr>
                      <td style="padding: 20px;">
                        <table width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#f8fafc" style="border-radius: 4px;">
                          <tr>
                            <td style="padding: 20px;">
                              <h3 style="margin: 0 0 20px; color: #1e3a8a; font-size: 18px;">Customer Details</h3>
                              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                  <td width="30%" style="padding: 8px 0; color: #4a5568;">Name:</td>
                                  <td style="padding: 8px 0; color: #1e3a8a; font-weight: bold;">${data.name}</td>
                                </tr>
                                <tr>
                                  <td style="padding: 8px 0; color: #4a5568;">Email:</td>
                                  <td style="padding: 8px 0;">
                                    <a href="mailto:${data.email}" style="color: #1e3a8a; font-weight: bold; text-decoration: none;">
                                      ${data.email}
                                    </a>
                                  </td>
                                </tr>
                                <tr>
                                  <td style="padding: 8px 0; color: #4a5568;">Phone:</td>
                                  <td style="padding: 8px 0;">
                                    <a href="tel:${data.phone}" style="color: #1e3a8a; font-weight: bold; text-decoration: none;">
                                      ${data.phone}
                                    </a>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
  
                    <!-- Travel Details -->
                    <tr>
                      <td style="padding: 20px;">
                        <table width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#f8fafc" style="border-radius: 4px;">
                          <tr>
                            <td style="padding: 20px;">
                              <h3 style="margin: 0 0 20px; color: #1e3a8a; font-size: 18px;">Travel Details</h3>
                              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                  <td width="30%" style="padding: 8px 0; color: #4a5568;">Destination:</td>
                                  <td style="padding: 8px 0; color: #1e3a8a; font-weight: bold;">${data.mainPackage}</td>
                                </tr>
                                <tr>
                                  <td style="padding: 8px 0; color: #4a5568;">Sub Package:</td>
                                  <td style="padding: 8px 0; color: #1e3a8a; font-weight: bold;">${data.subPackage || 'Not specified'}</td>
                                </tr>
                                <tr>
                                  <td style="padding: 8px 0; color: #4a5568;">Travel Month:</td>
                                  <td style="padding: 8px 0; color: #1e3a8a; font-weight: bold;">${data.monthOfTravel}</td>
                                </tr>
                                <tr>
                                  <td style="padding: 8px 0; color: #4a5568;">Number of Persons:</td>
                                  <td style="padding: 8px 0; color: #1e3a8a; font-weight: bold;">${data.numberOfPersons}</td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
  
                    <!-- Customer Message -->
                    <tr>
                      <td style="padding: 20px;">
                        <table width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#f8fafc" style="border-radius: 4px;">
                          <tr>
                            <td style="padding: 20px;">
                              <h3 style="margin: 0 0 20px; color: #1e3a8a; font-size: 18px;">Customer Message</h3>
                              <p style="margin: 0; color: #4a5568; line-height: 1.5;">${data.message}</p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
  
                    <!-- Action Required -->
                    <tr>
                      <td style="padding: 20px;">
                        <table width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#1e3a8a" style="border-radius: 4px;">
                          <tr>
                            <td style="padding: 20px; color: #ffffff; text-align: center;">
                              <h3 style="margin: 0 0 15px; color: #fbbf24; font-size: 18px;">Action Required</h3>
                              <p style="margin: 0; line-height: 1.5;">Please respond to this inquiry within 24 hours.</p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
  
                    <!-- Quick Actions -->
                    <tr>
                      <td style="padding: 20px;">
                        <table width="100%" cellpadding="0" cellspacing="0" border="0">
                          <tr>
                            <td align="center">
                              <table cellpadding="0" cellspacing="0" border="0" style="display: inline-block;">
                                <tr>
                                  <td style="padding: 10px;">
                                    <a href="mailto:${data.email}" style="display: inline-block; padding: 12px 24px; background-color: #fbbf24; color: #1e3a8a; text-decoration: none; font-weight: bold; border-radius: 4px;">
                                      Reply to Customer
                                    </a>
                                  </td>
                                  <td style="padding: 10px;">
                                    <a href="tel:${data.phone}" style="display: inline-block; padding: 12px 24px; background-color: #1e3a8a; color: #ffffff; text-decoration: none; font-weight: bold; border-radius: 4px;">
                                      Call Customer
                                    </a>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
  
                    <!-- Footer -->
                    <tr>
                      <td bgcolor="#f1f5f9" align="center" style="padding: 20px;">
                        <p style="margin: 0; color: #4a5568; font-size: 14px;">© 2024 Grand Royal Tours. All rights reserved.</p>
                        <p style="margin: 5px 0 0; color: #4a5568; font-size: 14px;">Internal communication - Please handle with care</p>
                      </td>
                    </tr>
  
                  </table>
                </td>
              </tr>
            </table>
          </div>
        </td>
      </tr>
    </table>
  </body>
  </html>
    `;
  }
  
  module.exports = createAdminEmailTemplate;