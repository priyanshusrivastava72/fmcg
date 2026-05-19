const generateFileLinks = (files) => {
  if (!files) return '<p>No files uploaded.</p>';
  
  if (Array.isArray(files) && files.length > 0) {
    return files.map((file, idx) => `<a href="${file.url || file}" target="_blank" style="display:inline-block; margin-right:10px; padding:8px 12px; background:#e2e8f0; color:#1e293b; text-decoration:none; border-radius:6px; font-size:12px;">View File ${idx + 1}</a>`).join('');
  }
  
  if (typeof files === 'object' && files.url) {
    return `<a href="${files.url}" target="_blank" style="display:inline-block; padding:8px 12px; background:#e2e8f0; color:#1e293b; text-decoration:none; border-radius:6px; font-size:12px;">View Document</a>`;
  }
  
  return '<p>No files uploaded.</p>';
};

export const distributorTemplate = (data) => {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
      <div style="background-color: #16a34a; padding: 20px; text-align: center;">
        <h2 style="color: white; margin: 0; font-size: 24px;">New Distributor Application</h2>
      </div>
      <div style="padding: 30px; background-color: #ffffff;">
        <p style="color: #4b5563; font-size: 16px;">You have received a new application for a distributorship partnership.</p>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr style="border-bottom: 1px solid #f3f4f6;">
            <td style="padding: 12px 0; color: #6b7280; font-weight: bold; width: 40%;">Full Name</td>
            <td style="padding: 12px 0; color: #111827; font-weight: 600;">${data.fullName}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f3f4f6;">
            <td style="padding: 12px 0; color: #6b7280; font-weight: bold;">Mobile Number</td>
            <td style="padding: 12px 0; color: #111827; font-weight: 600;">${data.mobileNumber}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f3f4f6;">
            <td style="padding: 12px 0; color: #6b7280; font-weight: bold;">Email</td>
            <td style="padding: 12px 0; color: #111827; font-weight: 600;">${data.email || 'N/A'}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f3f4f6;">
            <td style="padding: 12px 0; color: #6b7280; font-weight: bold;">Business Type</td>
            <td style="padding: 12px 0; color: #111827; font-weight: 600;">${data.businessType}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f3f4f6;">
            <td style="padding: 12px 0; color: #6b7280; font-weight: bold;">Investment Range</td>
            <td style="padding: 12px 0; color: #111827; font-weight: 600;">${data.investmentRange}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f3f4f6;">
            <td style="padding: 12px 0; color: #6b7280; font-weight: bold;">Shop Name</td>
            <td style="padding: 12px 0; color: #111827; font-weight: 600;">${data.shopName || 'N/A'}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f3f4f6;">
            <td style="padding: 12px 0; color: #6b7280; font-weight: bold;">Location</td>
            <td style="padding: 12px 0; color: #111827; font-weight: 600;">${data.city}, ${data.district}, ${data.state} - ${data.pincode}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f3f4f6;">
            <td style="padding: 12px 0; color: #6b7280; font-weight: bold;">Full Address</td>
            <td style="padding: 12px 0; color: #111827; font-weight: 600;">${data.address}</td>
          </tr>
        </table>

        <div style="margin-top: 30px;">
          <h3 style="color: #1f2937; border-bottom: 2px solid #e5e7eb; padding-bottom: 8px;">Uploaded Documents</h3>
          
          <div style="margin-bottom: 15px;">
            <strong style="display: block; color: #4b5563; font-size: 14px; margin-bottom: 5px;">GST Certificate:</strong>
            ${generateFileLinks(data.gstCertificate)}
          </div>
          
          <div style="margin-bottom: 15px;">
            <strong style="display: block; color: #4b5563; font-size: 14px; margin-bottom: 5px;">Shop Image:</strong>
            ${generateFileLinks(data.shopImage)}
          </div>
          
          <div style="margin-bottom: 15px;">
            <strong style="display: block; color: #4b5563; font-size: 14px; margin-bottom: 5px;">Warehouse Image:</strong>
            ${generateFileLinks(data.warehouseImage)}
          </div>
        </div>
        
        <p style="color: #9ca3af; font-size: 12px; text-align: center; margin-top: 30px;">Submitted on: ${new Date().toLocaleString()}</p>
      </div>
    </div>
  `;
};

export const advertisingTemplate = (data) => {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
      <div style="background-color: #2563eb; padding: 20px; text-align: center;">
        <h2 style="color: white; margin: 0; font-size: 24px;">New Advertising Proposal</h2>
      </div>
      <div style="padding: 30px; background-color: #ffffff;">
        <p style="color: #4b5563; font-size: 16px;">An advertising agency has submitted a new proposal.</p>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr style="border-bottom: 1px solid #f3f4f6;">
            <td style="padding: 12px 0; color: #6b7280; font-weight: bold; width: 40%;">Agency Name</td>
            <td style="padding: 12px 0; color: #111827; font-weight: 600;">${data.agencyName}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f3f4f6;">
            <td style="padding: 12px 0; color: #6b7280; font-weight: bold;">Contact Person</td>
            <td style="padding: 12px 0; color: #111827; font-weight: 600;">${data.contactPerson}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f3f4f6;">
            <td style="padding: 12px 0; color: #6b7280; font-weight: bold;">Mobile</td>
            <td style="padding: 12px 0; color: #111827; font-weight: 600;">${data.mobile}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f3f4f6;">
            <td style="padding: 12px 0; color: #6b7280; font-weight: bold;">Email</td>
            <td style="padding: 12px 0; color: #111827; font-weight: 600;">${data.email}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f3f4f6;">
            <td style="padding: 12px 0; color: #6b7280; font-weight: bold;">Agency Types</td>
            <td style="padding: 12px 0; color: #111827; font-weight: 600;">${Array.isArray(data.agencyTypes) ? data.agencyTypes.join(', ') : data.agencyTypes} ${data.otherAgencyType ? `(${data.otherAgencyType})` : ''}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f3f4f6;">
            <td style="padding: 12px 0; color: #6b7280; font-weight: bold;">Experience</td>
            <td style="padding: 12px 0; color: #111827; font-weight: 600;">${data.experience}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f3f4f6;">
            <td style="padding: 12px 0; color: #6b7280; font-weight: bold;">Max Campaign</td>
            <td style="padding: 12px 0; color: #111827; font-weight: 600;">${data.maxCampaign}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f3f4f6;">
            <td style="padding: 12px 0; color: #6b7280; font-weight: bold;">Pricing Model</td>
            <td style="padding: 12px 0; color: #111827; font-weight: 600;">${data.pricingModel}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f3f4f6;">
            <td style="padding: 12px 0; color: #6b7280; font-weight: bold;">Creative Services?</td>
            <td style="padding: 12px 0; color: #111827; font-weight: 600;">${data.creativeServices}</td>
          </tr>
        </table>

        <div style="margin-top: 20px; padding: 15px; background-color: #f9fafb; border-radius: 8px;">
          <h4 style="margin: 0 0 10px 0; color: #374151;">Why Partner With Us:</h4>
          <p style="margin: 0; color: #4b5563; font-size: 14px; line-height: 1.5;">${data.whyPartner}</p>
        </div>

        <div style="margin-top: 30px;">
          <h3 style="color: #1f2937; border-bottom: 2px solid #e5e7eb; padding-bottom: 8px;">Portfolio & Uploads</h3>
          
          <div style="margin-bottom: 15px;">
            <strong style="display: block; color: #4b5563; font-size: 14px; margin-bottom: 5px;">Portfolio Link:</strong>
            ${data.portfolioLink ? `<a href="${data.portfolioLink}" target="_blank">${data.portfolioLink}</a>` : 'N/A'}
          </div>
          
          <div style="margin-bottom: 15px;">
            <strong style="display: block; color: #4b5563; font-size: 14px; margin-bottom: 10px;">Attached Files (${data.files && data.files.length ? data.files.length : 0}):</strong>
            ${generateFileLinks(data.files)}
          </div>
        </div>
        
        <p style="color: #9ca3af; font-size: 12px; text-align: center; margin-top: 30px;">Submitted on: ${new Date().toLocaleString()}</p>
      </div>
    </div>
  `;
};

export const salesTemplate = (data) => {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
      <div style="background-color: #f59e0b; padding: 20px; text-align: center;">
        <h2 style="color: white; margin: 0; font-size: 24px;">New Sales Support Request</h2>
      </div>
      <div style="padding: 30px; background-color: #ffffff;">
        <p style="color: #4b5563; font-size: 16px;">A partner has requested sales team assistance.</p>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr style="border-bottom: 1px solid #f3f4f6;">
            <td style="padding: 12px 0; color: #6b7280; font-weight: bold; width: 40%;">Full Name</td>
            <td style="padding: 12px 0; color: #111827; font-weight: 600;">${data.fullName}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f3f4f6;">
            <td style="padding: 12px 0; color: #6b7280; font-weight: bold;">Business Name</td>
            <td style="padding: 12px 0; color: #111827; font-weight: 600;">${data.businessName}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f3f4f6;">
            <td style="padding: 12px 0; color: #6b7280; font-weight: bold;">Business Type</td>
            <td style="padding: 12px 0; color: #111827; font-weight: 600;">${data.businessType}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f3f4f6;">
            <td style="padding: 12px 0; color: #6b7280; font-weight: bold;">Mobile</td>
            <td style="padding: 12px 0; color: #111827; font-weight: 600;">${data.mobile}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f3f4f6;">
            <td style="padding: 12px 0; color: #6b7280; font-weight: bold;">Email</td>
            <td style="padding: 12px 0; color: #111827; font-weight: 600;">${data.email}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f3f4f6;">
            <td style="padding: 12px 0; color: #6b7280; font-weight: bold;">Location</td>
            <td style="padding: 12px 0; color: #111827; font-weight: 600;">${data.district}, ${data.state} - ${data.pincode}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f3f4f6;">
            <td style="padding: 12px 0; color: #6b7280; font-weight: bold;">Monthly Sales</td>
            <td style="padding: 12px 0; color: #111827; font-weight: 600;">${data.monthlySales}</td>
          </tr>
        </table>

        <div style="margin-top: 20px; padding: 15px; background-color: #f9fafb; border-radius: 8px;">
          <h4 style="margin: 0 0 10px 0; color: #374151;">Requested Support:</h4>
          <p style="margin: 0 0 15px 0; color: #4b5563; font-size: 14px; font-weight: bold;">${Array.isArray(data.requirements) ? data.requirements.join(', ') : data.requirements}</p>
          
          <h4 style="margin: 0 0 10px 0; color: #374151;">Detailed Requirements:</h4>
          <p style="margin: 0; color: #4b5563; font-size: 14px; line-height: 1.5;">${data.requirementsDescription}</p>
        </div>

        <div style="margin-top: 30px;">
          <h3 style="color: #1f2937; border-bottom: 2px solid #e5e7eb; padding-bottom: 8px;">Attached Files</h3>
          <div style="margin-bottom: 15px;">
            ${generateFileLinks(data.files)}
          </div>
        </div>
        
        <p style="color: #9ca3af; font-size: 12px; text-align: center; margin-top: 30px;">Submitted on: ${new Date().toLocaleString()}</p>
      </div>
    </div>
  `;
};
