
declare var BCAR_VERSION: string;
declare var LoadedError: typeof Error | ErrorConstructor;
declare var bcModSdk: import("bondage-club-mod-sdk").ModSDKGlobalAPI;

declare function prefix(words: string[]): string;

declare var BCT_API: any;

interface PlayerCharacter {
  BCAR: BCAR;
  BCT: any;
}

interface PlayerOnlineSettings {
  BCAR: BCAR;
}

interface BCAR {
  bcarSettings: BCARSettings;
}

interface BCARSettings {
  animationButtonsEnable: boolean;
  animationButtonsPosition: "upperleft" | "lowerleft" | "lowerright";
  arousalEnable: boolean;
  arousalStatus: "Enabled" | "Disabled";
  expressionsEnable: boolean;
  expressionsStatus: "Enabled" | "Disabled";
  earWigglingEnable: boolean;
  earWigglingStatus: "Enabled" | "Disabled";
  tailWaggingEnable: boolean;
  tailWaggingStatus: "Enabled" | "Disabled";
  wingFlappingEnable: boolean;
  wingFlappingStatus: "Enabled" | "Disabled";
  tailEmoteEnable: boolean;
  tailEmoteStatus: "Enabled" | "Disabled";
  earEmoteEnable: boolean;
  earEmoteStatus: "Enabled" | "Disabled";
  animal: string;
  genderDefault: {
    gender: "Male" | "Female" | "Non-Binary";
    pronoun: "";
    capPronoun: "He" | "She" | "They";
    intensive: "";
    capIntensive: "Him" | "Her" | "Them";
    possessive: "";
    capPossessive: "His" | "Her" | "Their";
  };
  earsDefault: {
    ears1: string;
    ears2: string;
    earsColor1: HexColor | HexColor[];
    earsDescription1: string;
    earsColor2: HexColor | HexColor[];
    earsDescription2: string;
    earsCount: number;
    earsDelay: number;
  }
  tailsDefault: {
    tails1: string;
    tails2: string;
    tailsColor1: HexColor | HexColor[];
    tailsDescription1: string;
    tailsColor2: HexColor | HexColor[];
    tailsDescription2: string;
    tailsCount: number;
    tailsDelay: number;
  }
  wingsDefault: {
    wings1: string;
    wings2: string;
    wingsColor1: HexColor | HexColor[];
    wingsDescription1: string;
    wingsColor2: HexColor | HexColor[];
    wingsDescription2: string;
    wingsCount: number;
    wingsDelay: number;
  };
  profile1: BCARProfile;
  profile1Saved: boolean;
  profile2: BCARProfile;
  profile2Saved: boolean;
  profile3: BCARProfile;
  profile3Saved: boolean;
  windowTimer: {
    changelog: number;
    commands: number;
    ghelp: number;
    help: number;
    info: number;
    timerEnable: boolean;
  };
}

interface BCARProfile {
  earWigglingEnable: boolean;
  earWigglingStatus: "Enabled" | "Disabled";
  earsDefault: BCARSettings["earsDefault"];
  tailWaggingEnable: boolean;
  tailWaggingStatus: "Enabled" | "Disabled";
  tailsDefault: BCARSettings["tailsDefault"];
  wingFlappingEnable: boolean;
  wingFlappingStatus: "Enabled" | "Disabled";
  wingsDefault: BCARSettings["wingsDefault"];
}

declare function PreferenceSubscreenBCARSettingsLoad();
declare function PreferenceSubscreenBCARSettingsRun();
declare function PreferenceSubscreenBCARSettingsClick();
declare function PreferenceSubscreenBCARSettingsExit();

declare function PreferenceSubscreenBCARCommandsLoad();
declare function PreferenceSubscreenBCARCommandsRun();
declare function PreferenceSubscreenBCARCommandsClick();
declare function PreferenceSubscreenBCARCommandsExit();

declare function PreferenceSubscreenBCAREarsLoad();
declare function PreferenceSubscreenBCAREarsRun();
declare function PreferenceSubscreenBCAREarsClick();
declare function PreferenceSubscreenBCAREarsExit();

declare function PreferenceSubscreenBCARTailLoad();
declare function PreferenceSubscreenBCARTailRun();
declare function PreferenceSubscreenBCARTailClick();
declare function PreferenceSubscreenBCARTailExit();

declare function PreferenceSubscreenBCARWingsLoad();
declare function PreferenceSubscreenBCARWingsRun();
declare function PreferenceSubscreenBCARWingsClick();
declare function PreferenceSubscreenBCARWingsExit();

declare function PreferenceSubscreenBCARMiscLoad();
declare function PreferenceSubscreenBCARMiscRun();
declare function PreferenceSubscreenBCARMiscClick();
declare function PreferenceSubscreenBCARMiscExit();

declare function PreferenceSubscreenBCARProfilesLoad();
declare function PreferenceSubscreenBCARProfilesRun();
declare function PreferenceSubscreenBCARProfilesClick();
declare function PreferenceSubscreenBCARProfilesExit();

declare function PreferenceSubscreenBCARConfirmAbortLoad();
declare function PreferenceSubscreenBCARConfirmAbortRun();
declare function PreferenceSubscreenBCARConfirmAbortClick();
declare function PreferenceSubscreenBCARConfirmAbortExit();

declare function PreferenceSubscreenBCARReactionsLoad();
declare function PreferenceSubscreenBCARReactionsRun();
declare function PreferenceSubscreenBCARReactionsClick();
declare function PreferenceSubscreenBCARReactionsExit();