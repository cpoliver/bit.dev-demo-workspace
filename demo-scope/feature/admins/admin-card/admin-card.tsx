import React from "react";
import { Avatar, Flex, Stack, Text } from "@chakra-ui/react";
import { Status } from "@cpoliver/demo-scope.ui.status";
import { ThemeProvider } from "@iamcloud/iam.ui.theme-provider";

export type AdminCardProps = { name: string; status?: Status };

export const AdminCard: React.FC<AdminCardProps> = ({
  name,
  status,
}: AdminCardProps) => (
  <ThemeProvider>
    <Stack spacing={4} direction="row" align="center">
      <Flex pos="relative">
        <Avatar name={name} size="sm" />
        <Flex pos="absolute" bottom={0} right={0}>
          {status && <Status status={status} size=".5rem" />}
        </Flex>
      </Flex>
      <Text fontSize="1.5rem" m={0} p={0}>
        {name}
      </Text>
    </Stack>
  </ThemeProvider>
);
