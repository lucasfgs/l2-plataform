import React from "react";

import {
  Container,
  SettingsContainer,
  Setting,
  SettingTitle,
  SettingInput,
  SettingContent,
  SettingButton
} from "./styles";
import Title from "../../Components/CardTitle";

export default function Account() {
  return (
    <Container>
      <Title>Account information</Title>
      <SettingsContainer>
        <Setting>
          <SettingContent>
            <SettingTitle>Name</SettingTitle>
            <SettingInput value="Lucas ferreira" />
          </SettingContent>
        </Setting>
        <Setting>
          <SettingContent>
            <SettingTitle>E-mail</SettingTitle>
            <SettingInput value="lucaslindo@gmail.com" type="e-mail" />
          </SettingContent>
        </Setting>
        <Setting>
          <SettingContent>
            <SettingTitle>Senha</SettingTitle>
            <SettingInput value="Lucas ferreira" type="password" />
          </SettingContent>
        </Setting>
        <SettingButton>Save</SettingButton>
      </SettingsContainer>
    </Container>
  );
}
