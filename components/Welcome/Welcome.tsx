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
        When I first got into cybersecurity and had to build a security program from scratch, I didn't know where to start. That's why I started this project to document and share what I've learned.
        
        The Cybersecurity Program Builder offers a framework for organizations developing security programs in the AI era. Combining proven cybersecurity practices with emerging AI security controls, this playbook provides actionable guidance across governance, privacy, risk management, and compliance. With this playbook you can start building your security program today!
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
          fz={11}
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
            '> Status: Ready to build secure systems ✓✓✓ ',
          ]}
        />
      </Paper>
    </>
  );
}