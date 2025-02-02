export type signatureStyle =
  | "labelOnly"
  | "currentLabelOnly"
  | "full"
  | "virtual";

export type Config = {
  border: boolean;
  maxWidth: number;
  maxHeight: number;
  winblend?: number;
  delay: number; // not implemented yet
  style: signatureStyle;
  onTriggerChar: boolean;
};

export function getDefaultDocConfig(): Config {
  return {
    border: true,
    maxWidth: 80,
    maxHeight: 30,
    delay: 50,
    style: "full",
    onTriggerChar: false,
  };
}

export function makeConfig(userConfig: Config): Config {
  const config: Config = getDefaultDocConfig();
  if (userConfig) {
    Object.assign(config, userConfig);
  }
  return config;
}
