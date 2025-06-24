'use client';

import { TextAnimate } from '@gfazioli/mantine-text-animate';
import { IconBrandGithub, IconExternalLink } from '@tabler/icons-react';
import { Anchor, Button, Center, Code, Paper, Text, Title } from '@mantine/core';
import pack from '../../package.json';
import classes from './Welcome.module.css';

export function Welcome() {
  return (
    <>
      <Title maw="90vw" mx="auto" className={classes.title} ta="center" mt={100}>
        Welcome to the Cybersecurity Program
        <TextAnimate
          animate="in"
          by="character"
          inherit
          variant="gradient"
          component="span"
          segmentDelay={0.2}
          duration={2}
          animation="scale"
          animateProps={{
            scaleAmount: 3,
          }}
          gradient={{ from: 'pink', to: 'yellow' }}
        >
          Builder Project
        </TextAnimate>
      </Title>

      <Text c="dimmed" ta="center" size="xl" maw={680} mx="auto" mt="sm">
        When I began my journey in cybersecurity, building a security program from scratch felt overwhelming. That's why I created the Cybersecurity Program Builder, to share practical guidance and lessons learned. This projectcombines proven cybersecurity practices with new AI-focused controls, offering a framework for organizations developing security programs today. Use it to get started on governance, privacy, risk management, and compliance in the AI era.
      </Text>

      <Center>
        <Button
          href="/docs"
          component="a"
          rightSection={<IconExternalLink />}
          variant="filled"
          px={32}
          radius={256}
          size="lg"
          mx="auto"
          mt="xl"
        >
          Get Started
        </Button>
      </Center>

      <Paper shadow="xl" p={8} mih={300} my={32} bg="dark.9" mx="auto" radius={8}>
        <TextAnimate.Typewriter
          inherit
          fz={14}
          c="green.5"
          ff="monospace"
          multiline
          delay={100}
          loop={false}
          value={[
            '$ security-program-builder --init',
            '> Initializing security framework...',
            '> Loading NIST AI RMF controls... ✓',
            '> Loading ISO 27001 controls... ✓',
            '> Loading OWASP AI Top 10... ✓',
            '> Generating governance policies... ✓',
            '> Setting up AI security controls... ✓',
            '> Framework ready! Run --help for commands',
            '$ security-program-builder --status',
            '> Status: Ready to build secure systems 🚀',
          ]}
        />
      </Paper>
    </>
  );
}