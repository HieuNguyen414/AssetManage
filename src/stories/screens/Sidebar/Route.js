const Route = [
  {
    route: "Dashboard",
    caption: "Dashboard",
    active:true,
    icon:require('../../icon/dashboard.png'),
    iconActive:require('../../icon/dashboard-active.png'),
  },
  {
    route: "AssetList",
    caption: "Asset List",
    active:false,
    icon:require('../../icon/asset.png'),
    iconActive:require('../../icon/asset-active.png'),
  },
  {
    route: "CategoryAssetList",
    caption: "Category Asset List",
    active:false,
    icon:require('../../icon/empty.png'),
    iconActive:require('../../icon/empty-active.png'),
  },
  {
    route: "AssetStatus",
    caption: "Asset Status",
    active:false,
    icon:require('../../icon/status.png'),
    iconActive:require('../../icon/status-active.png'),
  },
  {
    route: "QRCode",
    caption: "QR Code",
    active:false,
    icon:require('../../icon/qrcode.png'),
    iconActive:require('../../icon/qrcode-active.png'),
  }

]
export default Route;
