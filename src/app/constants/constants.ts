// role constants
import { FrameworkConfigSettings } from '../../fw/services/framework-config.service';

export class Constants {
  public static GAZETTEER_LAYER = 'gazetteer-layer';
  public static VHI = 'Vegetation Health Index (VHI)';
  public static VHI_COMPOSITE = 'KEN-IPP-VHI-COMPOSITE';
  public static VHI_HEADLINE = 'AIRBUS VHI';
  public static VHI_ALT_HEADLINE = 'AIRBUS VHI (DE-CLOUDED)';

  public static SECURITY_BASE_URL = '/ipp-security-api';
  public static DATA_BASE_URL = '/ipp-data-service';
  public static LAYERS_BASE_URL = '/ipp-layer-service';
  public static PROXY_BASE_URL = '/ipp-proxy-api';
  public static GAZETTEER_BASE_URL = '/ipp-gazetteer-service';
  public static COMMUNICATOR_BASE_URL = '/ipp-communicator-service';

  public static INSURANCE_ROLE = 'IPPKENINS';
  public static FARMER_ROLE = 'IPPKENFAR';
  public static INTERMEDIARY_ROLE = 'IPPKENINT';
  public static GOVERMENT_ROLE = 'IPPKENGOV';
  public static AGRICULTURAL_ROLE = 'IPPKENAGR';
  public static ADMIN_ROLE = 'IPPKENADM';
}

export const config: FrameworkConfigSettings = {
  showLanguageSelector: true,
  showUserControls: true,
  showStatusBar: true,
  showStatusBarBreakpoint: 800,
  statusBarActions: []
};

export const authenticatedconfig: FrameworkConfigSettings = {
  showLanguageSelector: true,
  showUserControls: true,
  showStatusBar: true,
  showStatusBarBreakpoint: 800,
  statusBarActions: [
    {
      name: 'Terms of Use',
      link: 'termsofuse',
      tooltip: 'View the terms of use'
    },
    {
      name: 'Privacy Policy',
      link: 'privacypolicy',
      tooltip: 'View the privacy policy'
    },
    {
      name: 'Project Info',
      link: 'projectinfo',
      tooltip: 'View the project information'
    },
    {
      name: 'Project Partners',
      link: 'projectpartners',
      tooltip: 'View the project partners'
    },
    {
      name: 'Contact Us',
      link: 'contactus',
      tooltip: 'View the contact us page'
    }
  ]
};
