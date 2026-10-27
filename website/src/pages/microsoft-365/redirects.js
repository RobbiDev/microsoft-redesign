// The ~45 links microsoft.com spreads across separate pages, forwarded to the section of the
// condensed page that now covers them. Keys are the paths our menus used to generate.

const P = '/microsoft-365';

export const m365Redirects = {
  // For individuals
  [`${P}/explore-microsoft-365-apps`]: `${P}/apps`,
  [`${P}/pricing-for-individuals`]: `${P}/plans?for=personal`,
  [`${P}/microsoft-365-personal`]: `${P}/plans?for=personal#plan-personal`,
  [`${P}/microsoft-365-family`]: `${P}/plans?for=personal#plan-family`,
  [`${P}/microsoft-365-premium`]: `${P}/plans?for=personal#plan-premium`,
  [`${P}/microsoft-365-pro`]: `${P}/plans?for=personal#plan-pro`,
  [`${P}/microsoft-365-basic`]: `${P}/plans?for=personal#plan-basic`,
  [`${P}/student-discount-pricing`]: `${P}#students`,
  [`${P}/college-students`]: `${P}#students`,
  // For business
  [`${P}/pricing-for-business`]: `${P}/plans?for=business`,
  [`${P}/microsoft-365-business-standard`]: `${P}/plans?for=business#plan-business-standard`,
  [`${P}/microsoft-365-business-premium`]: `${P}/plans?for=business#plan-business-premium`,
  [`${P}/for-small-business`]: `${P}/business`,
  [`${P}/for-schools`]: `${P}/education`,
  [`${P}/for-government`]: `${P}/government`,
  [`${P}/government-plans-and-pricing`]: `${P}/government#plans`,
  // For enterprise
  [`${P}/pricing-for-enterprise`]: `${P}/plans?for=enterprise`,
  [`${P}/microsoft-365-e3`]: `${P}/plans?for=enterprise#plan-e3`,
  [`${P}/microsoft-365-e5`]: `${P}/plans?for=enterprise#plan-e5`,
  [`${P}/microsoft-365-e7`]: `${P}/plans?for=enterprise#plan-e7`,
  [`${P}/for-enterprise`]: `${P}/enterprise`,
  [`${P}/for-frontline-workers`]: `${P}/plans?for=frontline`,
  [`${P}/for-nonprofits`]: `${P}/plans?for=nonprofit`,
  // Copilot
  [`${P}/explore-copilot`]: `${P}/copilot`,
  [`${P}/pricing-for-copilot`]: `${P}/copilot#get-copilot`,
  [`${P}/copilot-for-individuals`]: `${P}/copilot#get-copilot`,
  [`${P}/copilot-for-business`]: `${P}/copilot#get-copilot`,
  [`${P}/copilot-for-enterprise`]: `${P}/copilot#get-copilot`,
  // Apps and services
  [`${P}/microsoft-teams`]: `${P}/apps#teams`,
  [`${P}/word`]: `${P}/apps#word`,
  [`${P}/excel`]: `${P}/apps#excel`,
  [`${P}/powerpoint`]: `${P}/apps#powerpoint`,
  [`${P}/outlook`]: `${P}/apps#outlook`,
  [`${P}/onenote`]: `${P}/apps#onenote`,
  [`${P}/onedrive`]: `${P}/apps#onedrive`,
  [`${P}/sharepoint`]: `${P}/apps#sharepoint`,
  [`${P}/planner`]: `${P}/apps#planner`,
  [`${P}/copilot-app`]: `${P}/apps#copilot`,
  [`${P}/microsoft-office`]: `${P}/plans#office`,
  // Resources and support
  [`${P}/support`]: `${P}/resources#support`,
  [`${P}/getting-started`]: `${P}/resources#learn`,
  [`${P}/learning-center`]: `${P}/resources#learn`,
  [`${P}/templates`]: `${P}/resources#learn`,
  [`${P}/whats-new`]: `${P}/resources#news`,
  [`${P}/customer-stories`]: `${P}/resources#news`,
  [`${P}/trust-center`]: `${P}/resources#it`,
  [`${P}/product-roadmap`]: `${P}/resources#it`,
  [`${P}/try-free`]: `${P}/plans?for=personal`,
};
