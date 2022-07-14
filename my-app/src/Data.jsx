const DATA = [
    {
        id : 0,
        title : "IPhone 13 Pro Max",
        price : 1199,
        desc : "Smooth, responsive Super Retina XDR display with ProMotion. Huge camera system upgrade for dramatic new possibilities. EXceptional durability. The ultra-fast A15 Bionic chip. And breakthrough battery life. Let's Pro. Cinematic mode adds shallow depth of field and shifts focus automatically in your videos. Pro camera system with new 12MP Telephoto, Wide and Ultra Wide cameras; LiDAR Scanner; 6x optical zoom range; macro photography; Photographic Styles, ProRes video, Smart HDR 4, Night mode, Apple ProRAW, 4K Dolby Vision HDR recording. 12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording. Durable design with Ceramic Shield. Industry-leading IP68 water resistance.",
        img : "/images/products/product1.jpg"
    },
    {
        id : 1,
        title : "IPhone 13 Pro",
        price : 1099,
        desc : "Smooth, responsive Super Retina XDR display with ProMotion. Huge camera system upgrade for dramatic new possibilities. EXceptional durability. The ultra-fast A15 Bionic chip. And breakthrough battery life. Let's Pro. Cinematic mode adds shallow depth of field and shifts focus automatically in your videos. Pro camera system with new 12MP Telephoto, Wide and Ultra Wide cameras; LiDAR Scanner; 6x optical zoom range; macro photography; Photographic Styles, ProRes video, Smart HDR 4, Night mode, Apple ProRAW, 4K Dolby Vision HDR recording. 12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording. A15 Bionic chip for lightning-fast performance. Up to 22 hours of video playback. Durable design with Ceramic Shield. Industry-leading IP68 water resistance.",
        img : "/images/products/product2.jpg"
    },
    {
        id : 2,
        title : "IPhone 13",
        price : 929,
        desc : "A 15 cm (6.1-inch) Super Retina XDR display. Cinematic mode adds shallow depth of field and shifts focus automatically in your videos. Advanced dual-camera system with 12MP Wide and Ultra Wide cameras; Photographic Styles, Smart HDR 4, Night mode, 4K Dolby Vision HDR recording. 12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording. A15 Bionic chip for lightning-fast performance. Up to 19 hours of video playback. Durable design with Ceramic Shield. Industry-leading IP68 water resistance.",
        img : "/images/products/product3.jpg"
    },
    {
        id : 3,
        title : "IPhone 13 Mini",
        price : 829,
        desc : "A 13 cm (5.4-inch) Super Retina XDR display. Cinematic mode adds shallow depth of field and shifts focus automatically in your videos. Advanced dual-camera system with 12MP Wide and Ultra Wide cameras; Photographic Styles, Smart HDR 4, Night mode, 4K Dolby Vision HDR recording. 12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording. A15 Bionic chip for lightning-fast performance. Up to 17 hours of video playback. Durable design with Ceramic Shield. Industry-leading IP68 water resistance.",
        img : "/images/products/product4.jpg"
    },
    {
        id : 4,
        title : "SAMSUNG Galaxy Z Fold 3",
        price : 1499,
        desc : "Main Display - 19.19cm (7'6'') Infinity Flex Display with an Under Display Camera, Dynamic AMOLED 2X  with Adaptive Refresh Rate. Cover Display - 15.82cm (6.2”) Infinity-O Display, Switchable 60/120Hz. Compatible with S Pen Fold Edition and S Pen Pro (Sold separately). 5G Ready powered by Qualcomm Snapdragon 888 Octa-Core processor. IPX8 Rated for Water Resistance,  Corning Gorilla Glass Victus, Armor Aluminium frame. Fingerprint Sensor (side) & Facial recognition. Dual Sim (1Nano Sim + 1 Nano Sim/eSIM).",
        img : "/images/products/product5.jpg"
    },
    {
        id : 5,
        title : "SAMSUNG Galaxy Z Flip 3",
        price : 1049,
        desc : "Main Display -6.7 Dynamic AMOLED 2X, Adaptive 120Hz(10~120Hz), FHD+ Infinity-O Display(2,640 x 1,080) 22:9 ratio, 425PPI| Cover Display - 1.9'' Super AMOLED 60Hz (260 x 512), 302PPI. Dual Rear Camera Setup - 12 MP Ultra Wide Camera: FF F2.2, FOV: 123°, Pixel Size: 1.12 µm +12 MP Wide Camera: Dual Pixel, F1.8, Pixel Size: 1.4µm OIS | Front Camera: 10 MP, 1.22µm FF, F2.4. 5G Ready powered by Qualcomm Snapdragon 888 Octa-Core processor, 8GB RAM, 256GB internal memory (UFS 3.1). 3,300 mAh Dual battery ( 930 + 2,370 mAh) Wired 15W / Wireless 10W Wireless PowerShare & Fingerprint Sensor (side). IPX8 Rated, Dual Sim (1 Nano Sim + 1 eSim).",
        img : "/images/products/product6.jpg"
    },
    {
        id : 6,
        title : "SAMSUNG Galaxy Z Fold 2",
        price : 1399,
        desc : "Triple camera setup - Wide: 12MP (F1.8) + Tele: 12MP (F2.4) 2x optical zoom + UW: 12MP (F2.2) with front camera cover display (HID): 10MP (F2.2) + main display (HID): 10MP (F2.2). 19.27 centimeters (7.6-inch) dynamic AMOLED 2X - Infinity-O display, QXGA+ multi-touch capacitive touchscreen with 2208 x 1768 pixels resolution, 373 ppi pixel density and 16M color support. Android v10.0 operating system with 1.8GHz+2.4GHz+3.09GHz Qualcomm | SM8250-2-AB octa core processor. Memory, Storage & SIM: 12GB RAM | 128GB internal memory expandable | Dual SIM (nano+nano) dual-standby (4G+4G). 4500mAH lithium-ion battery fast charge | 25W Type-C fast charger in the box. Fast face unlock and fingerprint sensor | Dual SIM (SIM 1 + Embedded SIM) with dual standby and dual VoLTE , Dedicated Sim slot.",
        img : "/images/products/product7.jpg"
    },
    {
        id : 7,
        title : "SAMSUNG Galaxy S22 Ultra",
        price : 1199,
        desc : "The first Galaxy S with embedded S Pen. Write comfortably like pen on paper, turn quick notes into legible text and use Air Actions to control your phone remotely. Improved latency in Samsung Notes makes every pen stroke feel as natural as ink on paper — and you can convert those hastily written ideas into legible text. 5G Ready powered by Galaxy’s first 4nm processor. Our fastest, most powerful chip ever. That means, a faster CPU and GPU compared to Galaxy S21 Ultra. It’s an epic leap for smartphone technology. The Dynamic AMOLED 2x display improves outdoor visibility with up to 1750 nits in peak brightness.* And the 120Hz adaptive refresh rate keeps the scroll smooth, adjusting to what's on screen for an optimized view. Our most advanced Pro-grade Camera yet, packing the power of a professional's kit in one handheld device. Also lets you make your nights epic with Nightography: The sensor pulls in more light, the Super Clear Lens tones down lens flare, and fast-acting AI delivers near-instant intelligent processing.",
        img : "/images/products/product8.jpg"
    },
    {
        id : 8,
        title : "SAMSUNG Galaxy S22 Plus",
        price : 999,
        desc : "Pro-grade Camera that lets you make your nights epic with Nightography: It’s our brightest innovation yet. The sensor pulls in more light, the Super Clear Glass dials down lens flare, and fast-acting AI delivers near-instant intelligent processing. VisionBooster outshines the sun: Stunning 120Hz Dynamic AMOLED 2X display is crafted specifically for high outdoor visibility, keeping the view clear in bright daylight. 4nm processor, our fastest chip yet: Our fastest, most powerful chip ever. That means, a faster CPU and GPU compared to Galaxy S21 Ultra. It’s an epic leap for smartphone technology. Sleek design in a range of colors lets you express yourself how you like. The slim bezels flow into a symmetrical polished frame for an expansive, balanced display. Corning Gorilla Glass Victus+ on the screen and back panels.",
        img : "/images/products/product9.png"
    },
    {
        id : 9,
        title : "SAMSUNG Galaxy S22",
        price : 799,
        desc : "Pro-grade Camera that lets you make your nights epic with Nightography: It’s our brightest innovation yet. The sensor pulls in more light, the Super Clear Glass dials down lens flare, and fast-acting AI delivers near-instant intelligent processing. VisionBooster outshines the sun: Stunning 120Hz Dynamic AMOLED 2X display is crafted specifically for high outdoor visibility, keeping the view clear in bright daylight. 4nm processor, our fastest chip yet: Our fastest, most powerful chip ever. That means, a faster CPU and GPU compared to Galaxy S21 Ultra. It’s an epic leap for smartphone technology.",
        img : "/images/products/product10.png"
    },
    {
        id : 10,
        title : "Apple iPad Pro",
        price : 1099,
        desc : "Apple M1 chip for next-level performance. Brilliant 32.77 cm (12.9-inch) Liquid Retina XDR display with ProMotion, True Tone, and P3 wide color. TrueDepth camera system featuring Ultra Wide camera with Center Stage. 12MP Wide camera, 10MP Ultra Wide camera, and LiDAR Scanner for immersive AR. Stay connected with ultrafast Wi-Fi and 4GLTE. Go further with all-day battery life. Thunderbolt port for connecting to fast external storage, displays, and docks. Face ID for secure authentication. Four speaker audio and five studio-quality microphones. Support for Apple Pencil (2nd generation), Magic Keyboard, and Smart Keyboard Folio.",
        img : "/images/products/product12.jfif"
    },
    {
        id : 11,
        title : "Apple iPad Air",
        price : 899,
        desc : "27.69 cm (10.9-inch) Liquid Retina display1 with True Tone, P3 wide colour and an anti-reflective coating. Apple M1 chip with Neural Engine. 12MP Wide camera. 12MP Ultra Wide front camera with Center Stage. Up to 256GB of storage. Available in blue, purple, pink, starlight, and space gray. Stereo landscape speakers. Touch ID for secure authentication. All-day battery life. Works with Magic Keyboard, Smart Keyboard Folio and Apple Pencil (2nd generation).",
        img : "/images/products/product11.jpg"
    },
 
]
export default DATA;