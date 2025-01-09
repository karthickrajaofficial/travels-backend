// backend/templates/userEmailTemplate.js

function createUserEmailTemplate(data) {
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
                              <h1 style="margin: 0; color: #fbbf24; font-family: Arial, Helvetica, sans-serif; font-size: 24px; font-weight: 700;">GRAND ROYAL TOURS</h1>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
  
                    <!-- Welcome Message -->
                    <tr>
                      <td style="padding: 35px 10px;" align="center">
                        <h2 style="margin: 0; color: #1e3a8a; font-size: 20px; font-weight: bold; font-family: Arial, Helvetica, sans-serif;">Thank You for Your Travel Inquiry!</h2>
                        <p style="margin: 10px 0 0; font-size: 16px; color: #4a5568;">Dear ${data.name}, we're excited to help plan your journey.</p>
                      </td>
                    </tr>
  
                    <!-- Travel Details -->
                    <tr>
                      <td style="padding: 20px;">
                        <table width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#f8fafc" style="border-radius: 4px;">
                          <tr>
                            <td style="padding: 20px;">
                              <h3 style="margin: 0 0 20px; color: #1e3a8a; font-size: 18px;">Your Travel Details</h3>
                              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                  <td width="40%" style="padding: 8px 0; color: #4a5568;">Destination:</td>
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
  
                    <!-- Next Steps -->
                    <tr>
                      <td style="padding: 20px;">
                        <table width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#1e3a8a" style="border-radius: 4px;">
                          <tr>
                            <td style="padding: 20px; color: #ffffff;">
                              <h3 style="margin: 0 0 15px; color: #fbbf24; font-size: 18px;">What's Next?</h3>
                              <p style="margin: 0 0 15px; line-height: 1.5;">Our team will review your inquiry and contact you within 24 hours at:</p>
                              <p style="margin: 5px 0;">📞 Phone: ${data.phone}</p>
                              <p style="margin: 5px 0;">📧 Email: ${data.email}</p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
  
                    <!-- Contact Information -->
                    <!-- Contact Information -->
                    <tr>
                      <td style="padding: 20px;">
                        <table width="100%" cellpadding="0" cellspacing="0" border="0">
                          <tr>
                            <td align="center" style="padding: 20px 0; border-top: 1px solid #e2e8f0;">
                              <h3 style="margin: 0 0 15px; color: #1e3a8a; font-size: 18px;">Need Immediate Assistance?</h3>
                              <p style="margin: 0 0 10px; color: #4a5568;">Contact us directly:</p>
                              <p style="margin: 5px 0; color: #1e3a8a;">
                                ☎ <a href="tel:+919159973503" style="color: #1e3a8a; text-decoration: none;">+91 91599 73503</a>
                              </p>
                              <p style="margin: 5px 0; color: #1e3a8a;">
                                💬 <a href="https://wa.me/919159973503" style="color: #1e3a8a; text-decoration: none;">WhatsApp Us</a>
                              </p>
                              <p style="margin: 5px 0; color: #1e3a8a;">
                                ✉ <a href="mailto:info@grandroyaltours.com" style="color: #1e3a8a; text-decoration: none;">info@grandroyaltours.com</a>
                              </p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>

  
                    <!-- Footer -->
                    <tr>
                      <td bgcolor="#f1f5f9" align="center" style="padding: 20px;">
                        <p style="margin: 0; color: #4a5568; font-size: 14px;">© 2024 Grand Royal Tours. All rights reserved.</p>
                        <p style="margin: 5px 0 0; color: #4a5568; font-size: 14px;">Hyderabad, Telangana, India</p>
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
  
  module.exports = createUserEmailTemplate;