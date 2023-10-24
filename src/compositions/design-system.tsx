import { FC } from 'react';
import Body from '../components/body';
import Button from '../components/button';
import Heading from '../components/heading';
import Eth from '../components/icons/eth';
import Twitter from '../components/icons/twitter';
import Link from '../components/link';
import Box from '../components/box';
import Code from '../components/code';
import Stack from '../components/stack';
import Grid from '../components/grid';
import Youtube from '../components/icons/youtube';
import Menu from '../components/icons/menu';
import ChevronDown from '../components/icons/chevron';
import Discord from '../components/icons/discord';
import Logo from '../components/logo';
import Fast from '../components/icons/fast';
import Medium from '../components/icons/medium';
import Slow from '../components/icons/slow';
import External from '../components/icons/external';
import Footer from '../components/footer';
import Navigation from '../components/navigation';
import Wallet from '../components/wallet';
import image from '../assets/pfp.png';
import Banner from '../components/banner';
import PFP from '../assets/pfp/legends.png';
import Card from '../components/card';
import GenesisPFP from '../assets/pfp/genesis.png';
import DegenHoursPFP from '../assets/pfp/degenhours.png';
import FrogtoberPFP from '../assets/pfp/frogtober.png';
import LegendsPFP from '../assets/pfp/legends.png';
import MutantsPFP from '../assets/pfp/mutants.png';
import SerumPFP from '../assets/pfp/serum.png';
import ElementalsPFP from '../assets/pfp/elementals.png';

export const DesignSystem: FC<{}> = () => {
  
  const handleClick = () => {
    alert('Button clicked!');
  };

  const BoxHorSnippet = `<Box localStyles={{ padding: 48, background: '#343434' }}>...</Box>`;
  const StackHorSnippet = `<Stack space={24} direction='HORIZONTAL'>...</Stack>`;
  const StackVerSnippet = `<Stack space={24} direction='VERTICAL'>...</Stack>`;
  const GridSnippet = `<Grid columns={3} gap={24}>...</Grid>`;
  const LinkSnippet = `<Link href="#">Link</Link>`;
  const LinkBeforeSnippet = `<Link before={<Discord />} href="#">Link</Link>`;
  const LinkAfterSnippet = `<Link after={<Twitter />} href="#">Link</Link>`;

  return (
    <>

      <Navigation 
        localStyles={{position: 'fixed', top: 0}}
        wallet={<Wallet balance={0.0389} address="0x6972b4e81673bcec5f8b4c280E6F752C800D6ED6" profile={image} />}>
        <Button variant='TERTIARY' size='M' active>Home</Button>
        <Button variant='TERTIARY' size='M'>Portals</Button>
        <Button variant='TERTIARY' size='M' after={<External />}>Marketplace</Button>
        <Button variant='TERTIARY' size='M' after={<External />}>Merch</Button>
        <Button variant='TERTIARY' size='M' after={<External />}>EngageR</Button>
      </Navigation>

      <Stack direction='VERTICAL' localStyles={{marginTop: 86, marginBottom: 94, '@media (min-width: 1080px)': { marginBottom: 50,}}}>

        <Banner pfp={PFP} heading='PAYC Legends'>
          <Button size='M' variant="PRIMARY" onClick={handleClick}>View Collection</Button>
        </Banner>

          {/* Home Tiles */}
          <Grid
            columns={1}
            gap={'var(--scale-48)'}
            localStyles={{
              padding: 'var(--scale-48)',
              gridTemplateColumns: '1fr',
              '@media (min-width: 800px)' :{
                gridTemplateColumns: '1fr 1fr',
              },
              '@media (min-width: 1200px)' :{
                gridTemplateColumns: '1fr 1fr 1fr 1fr',
              },
            }}>
            <Card heading="Genesis" size='7,777' pfp={GenesisPFP} direction="VERTICAL">
              <Button size='M' variant='SECONDARY' onClick={handleClick}>View Collection</Button>
              <Button size='M' variant="PRIMARY" onClick={handleClick}>Select Portal</Button>
            </Card>
            <Card heading="Mutants" size='2,801' pfp={MutantsPFP} direction="VERTICAL">
              <Button size='M' variant='SECONDARY' onClick={handleClick}>View Collection</Button>
              <Button size='M' variant="PRIMARY" disabled>Mint Closed</Button>
            </Card>
            <Card heading="Serum" size='Coming soon' pfp={SerumPFP} direction="VERTICAL">
              <Button size='M' variant='SECONDARY' onClick={handleClick}>View Collection</Button>
              <Button size='M' variant="PRIMARY" onClick={handleClick}>Apply Serum</Button>
            </Card>
            <Card heading="Elementals" size='Coming soon' pfp={ElementalsPFP} direction="VERTICAL">
              <Button size='M' variant='SECONDARY' onClick={handleClick}>View Collection</Button>
              <Button size='M' variant="PRIMARY" onClick={handleClick}>Apply Serum</Button>
            </Card>
            <Card heading="Degen Hours" size='1,302' pfp={DegenHoursPFP} direction="VERTICAL">
              <Button size='M' variant='SECONDARY' onClick={handleClick}>View Collection</Button>
              <Button size='M' variant="PRIMARY" onClick={handleClick}>Select Portal</Button>
            </Card>
            <Card heading="Frogtober" size='2,615' pfp={FrogtoberPFP} direction="VERTICAL">
              <Button size='M' variant='SECONDARY' onClick={handleClick}>View Collection</Button>
              <Button size='M' variant="PRIMARY" onClick={handleClick}>Select Portal</Button>
            </Card>
            <Card heading="Legends" size='1,000' pfp={LegendsPFP} direction="VERTICAL">
              <Button size='M' variant='SECONDARY' onClick={handleClick}>View Collection</Button>
              <Button size='M' variant="PRIMARY" disabled>Portal Paused</Button>
            </Card>
  
          </Grid>


          {/* Portal Tiles */}
          <Grid
            columns={1}
            gap={'var(--scale-48)'} 
            localStyles={{
              padding: 'var(--scale-48)',
              gridTemplateColumns: '1fr',
              '@media (min-width: 800px)' :{
                gridTemplateColumns: '1fr 1fr',
              },
              '@media (min-width: 1200px)' :{
                gridTemplateColumns: '1fr',
              },
            }}>
            <Card heading="Degen Hours" size='1,302' pfp={DegenHoursPFP} direction="HORIZONTAL">
              <Button size='M' variant='SECONDARY' onClick={handleClick}>View Collection</Button>
              <Button size='M' variant="PRIMARY" onClick={handleClick}>Select Portal</Button>
            </Card>
            <Card heading="Frogtober" size='2,615' pfp={FrogtoberPFP} direction="HORIZONTAL">
              <Button size='M' variant='SECONDARY' onClick={handleClick}>View Collection</Button>
              <Button size='M' variant="PRIMARY" onClick={handleClick}>Select Portal</Button>
            </Card>
            <Card heading="Legends" size='1,000' pfp={LegendsPFP} direction="HORIZONTAL">
              <Button size='M' variant='SECONDARY' onClick={handleClick}>View Collection</Button>
              <Button size='M' variant="PRIMARY" onClick={handleClick}>Select Portal</Button>
            </Card>
          </Grid>
          


        <Stack space={'var(--scale-72)'} direction='VERTICAL' localStyles={{padding: 'var(--scale-48)'}}>
          <Heading level="1">PAYC Design System</Heading>
        </Stack>

        {/* LAYOUT */}
        <Stack space={'var(--scale-72)'} direction='VERTICAL' localStyles={{padding: 'var(--scale-48)'}}>
          <Heading level="3">Component / Layout</Heading>
          <Stack space={'var(--scale-12)'} direction='VERTICAL'>
            <Heading level="6">Box Example</Heading>
            <Code>{BoxHorSnippet}</Code>
            <Box localStyles={{ padding: 'var(--scale-48)', background: 'var(--dark-200)' }}>
              <Box localStyles={{ width: 'var(--scale-24)', height: 'var(--scale-24)', background: 'var(--dark-100)' }}><></></Box>
            </Box>
          </Stack>
          <Stack space={'var(--scale-12)'} direction='VERTICAL'>
            <Heading level="6">Stack Example / Horizontal direction</Heading>
            <Code>{StackHorSnippet}</Code>
            <Stack space={'var(--scale-24)'} direction='HORIZONTAL'>
              <Box localStyles={{ width: 'var(--scale-24)', height: 'var(--scale-24)', background: 'var(--dark-100)' }}><></></Box>
              <Box localStyles={{ width: 'var(--scale-24)', height: 'var(--scale-24)', background: 'var(--dark-100)' }}><></></Box>
              <Box localStyles={{ width: 'var(--scale-24)', height: 'var(--scale-24)', background: 'var(--dark-100)' }}><></></Box>
            </Stack>
          </Stack>
          <Stack space={'var(--scale-12)'} direction='VERTICAL'>
            <Heading level="6">Stack Example / Vertical direction</Heading>
            <Code>{StackVerSnippet}</Code>
            <Stack space={'var(--scale-24)'} direction='VERTICAL'>
              <Box localStyles={{ width: 'var(--scale-24)', height: 'var(--scale-24)', background: 'var(--dark-100)' }}><></></Box>
              <Box localStyles={{ width: 'var(--scale-24)', height: 'var(--scale-24)', background: 'var(--dark-100)' }}><></></Box>
              <Box localStyles={{ width: 'var(--scale-24)', height: 'var(--scale-24)', background: 'var(--dark-100)' }}><></></Box>
            </Stack>
          </Stack>
          <Stack space={'var(--scale-12)'} direction='VERTICAL'>
            <Heading level="6">Grid Example</Heading>
            <Code>{GridSnippet}</Code>
            <Grid columns={3} gap="var(--scale-24)">
              <Box localStyles={{ height: 'var(--scale-24)', background: 'var(--dark-100)' }}><></></Box>
              <Box localStyles={{ height: 'var(--scale-24)', background: 'var(--dark-100)' }}><></></Box>
              <Box localStyles={{ height: 'var(--scale-24)', background: 'var(--dark-100)' }}><></></Box>
            </Grid>
          </Stack>
        </Stack>

        {/* LOGO */}
        <Stack space={'var(--scale-24)'} direction='VERTICAL' localStyles={{padding: 'var(--scale-48)'}}>
          <Box localStyles={{ marginBottom: 'var(--scale-24)' }}>
            <Heading level="3">Component / Logo</Heading>
          </Box>
          <Logo />
        </Stack>

        {/* ICONS */}
        <Stack space={'var(--scale-24)'} direction='VERTICAL' localStyles={{padding: 'var(--scale-48)'}}>
          <Box localStyles={{ marginBottom: 'var(--scale-24)' }}>
            <Heading level="3">Component / Icons</Heading>
          </Box>
          <Box localStyles={{ display: 'flex', alignItems: 'center', gap: 'var(--scale-24)', padding: 'var(--scale-48)'}}>
            <Twitter theme="LIGHT" size="L" />
            <Twitter theme="LIGHT" size="M" />
            <Twitter theme="LIGHT" size="S" />
            <Youtube theme="LIGHT" size="L" />
            <Youtube theme="LIGHT" size="M" />
            <Youtube theme="LIGHT" size="S" />
            <Menu theme="LIGHT" size="L" />
            <Menu theme="LIGHT" size="M" />
            <Menu theme="LIGHT" size="S" />
            <Discord theme="LIGHT" size="L" />
            <Discord theme="LIGHT" size="M" />
            <Discord theme="LIGHT" size="S" />
            <ChevronDown theme="LIGHT" size="L" />
            <ChevronDown theme="LIGHT" size="M" />
            <ChevronDown theme="LIGHT" size="S" />
            <Fast theme="LIGHT" size="L" />
            <Fast theme="LIGHT" size="M" />
            <Fast theme="LIGHT" size="S" />
            <Medium theme="LIGHT" size="L" />
            <Medium theme="LIGHT" size="M" />
            <Medium theme="LIGHT" size="S" />
            <Slow theme="LIGHT" size="L" />
            <Slow theme="LIGHT" size="M" />
            <Slow theme="LIGHT" size="S" />
            <Eth theme="LIGHT" size="L" />
            <Eth theme="LIGHT" size="M" />
            <Eth theme="LIGHT" size="S" />
            <External theme="LIGHT" size="L" />
            <External theme="LIGHT" size="M" />
            <External theme="LIGHT" size="S" />
          </Box>
          <Box localStyles={{ display: 'flex', alignItems: 'center', gap: 'var(--scale-24)', padding: 'var(--scale-48)', background: 'white' }}>
            <Twitter theme="DARK" size="L" />
            <Twitter theme="DARK" size="M" />
            <Twitter theme="DARK" size="S" />
            <Youtube theme="DARK" size="L" />
            <Youtube theme="DARK" size="M" />
            <Youtube theme="DARK" size="S" />
            <Menu theme="DARK" size="L" />
            <Menu theme="DARK" size="M" />
            <Menu theme="DARK" size="S" />
            <Discord theme="DARK" size="L" />
            <Discord theme="DARK" size="M" />
            <Discord theme="DARK" size="S" />
            <ChevronDown theme="DARK" size="L" />
            <ChevronDown theme="DARK" size="M" />
            <ChevronDown theme="DARK" size="S" />
            <Fast theme="DARK" size="L" />
            <Fast theme="DARK" size="M" />
            <Fast theme="DARK" size="S" />
            <Medium theme="DARK" size="L" />
            <Medium theme="DARK" size="M" />
            <Medium theme="DARK" size="S" />
            <Slow theme="DARK" size="L" />
            <Slow theme="DARK" size="M" />
            <Slow theme="DARK" size="S" />
            <Eth theme="DARK" size="L" />
            <Eth theme="DARK" size="M" />
            <Eth theme="DARK" size="S" />
            <External theme="DARK" size="L" />
            <External theme="DARK" size="M" />
            <External theme="DARK" size="S" />
          </Box>
        </Stack>

        {/* BUTTON */}
        <Stack space={'var(--scale-24)'} direction='VERTICAL' localStyles={{padding: 'var(--scale-48)'}}>
          <Box localStyles={{ marginBottom: 'var(--scale-24)' }}>
            <Heading level="3">Component / Button</Heading>
          </Box>

          <Box localStyles={{ display: 'flex', alignItems: 'center', gap: 'var(--scale-24)', marginBottom: 'var(--scale-60)' }}>
            <Button size='S' variant="PRIMARY" onClick={handleClick}>Enter Portal</Button>
            <Button size='M' variant="PRIMARY" onClick={handleClick}>Enter Portal</Button>
            <Button size='L' variant="PRIMARY" onClick={handleClick}>Enter Portal</Button>
            <Button size='S' variant="SECONDARY" onClick={handleClick}>Enter Portal</Button>
            <Button size='M' variant="SECONDARY" onClick={handleClick}>Enter Portal</Button>
            <Button size='L' variant="SECONDARY" onClick={handleClick}>Enter Portal</Button>
            <Button size='S' variant="TERTIARY" onClick={handleClick}>Enter Portal</Button>
            <Button size='M' variant="TERTIARY" onClick={handleClick}>Enter Portal</Button>
            <Button size='L' variant="TERTIARY" onClick={handleClick}>Enter Portal</Button>
          </Box>
          <Box localStyles={{ display: 'flex', alignItems: 'center', gap: 'var(--scale-24)' }}>
            <Button iconOnly size='S' variant="PRIMARY" onClick={handleClick}><Twitter size="S" theme="DARK"/></Button>
            <Button iconOnly size='M' variant="PRIMARY" onClick={handleClick}><Twitter size="M" theme="DARK"/></Button>
            <Button iconOnly size='L' variant="PRIMARY" onClick={handleClick}><Twitter size="L" theme="DARK"/></Button>
            <Button iconOnly size='S' variant="SECONDARY" onClick={handleClick}><Twitter size="S" /></Button>
            <Button iconOnly size='M' variant="SECONDARY" onClick={handleClick}><Twitter size="M" /></Button>
            <Button iconOnly size='L' variant="SECONDARY" onClick={handleClick}><Twitter size="L" /></Button>
            <Button iconOnly size='S' variant="TERTIARY" onClick={handleClick}><Twitter size="S"/></Button>
            <Button iconOnly size='M' variant="TERTIARY" onClick={handleClick}><Twitter size="M"/></Button>
            <Button iconOnly size='L' variant="TERTIARY" onClick={handleClick}><Twitter size="L"/></Button>
          </Box>

        </Stack>

        {/* LINK */}
        <Stack space={'var(--scale-24)'} direction='VERTICAL' localStyles={{padding: 'var(--scale-48)'}}>
          <Box localStyles={{ marginBottom: 'var(--scale-24)' }}>
            <Heading level="3">Component / Link</Heading>
          </Box>
          <Box localStyles={{ display: 'flex', alignItems: 'center', gap: 'var(--scale-24)' }}>
            <Link href="#">Link</Link>
            <Link before={<Discord />} href="#">Link</Link>
            <Link after={<Twitter />} href="#">Link</Link>
          </Box>
          <Code>{LinkSnippet}</Code>
          <Code>{LinkBeforeSnippet}</Code>
          <Code>{LinkAfterSnippet}</Code>
        </Stack>

        {/* HEADING - LIGHT */}
        <Stack space={'var(--scale-24)'} direction='VERTICAL' localStyles={{padding: 'var(--scale-48)'}}>
          <Box localStyles={{ marginBottom: 'var(--scale-24)' }}>
            <Heading level="3">Component / Heading [Light]</Heading>
          </Box>
          <Heading level="1">Payc</Heading>
          <Heading level="2">Payc</Heading>
          <Heading level="3">Payc</Heading>
          <Heading level="4">Payc</Heading>
          <Heading level="5">Payc</Heading>
          <Heading level="6">Payc</Heading>
        </Stack>

        {/* HEADING - DARK */}
        <Stack space={'var(--scale-24)'} direction='VERTICAL' localStyles={{padding: 'var(--scale-48)', background: 'white'}}>
          <Box localStyles={{ marginBottom: 'var(--scale-24)' }}>
            <Heading level="3" theme="DARK">Component / Heading [Dark]</Heading>
          </Box>
          <Heading level="1" theme="DARK">Payc</Heading>
          <Heading level="2" theme="DARK">Payc</Heading>
          <Heading level="3" theme="DARK">Payc</Heading>
          <Heading level="4" theme="DARK">Payc</Heading>
          <Heading level="5" theme="DARK">Payc</Heading>
          <Heading level="6" theme="DARK">Payc</Heading>
        </Stack>

        {/* BODY - LIGHT */}
        <Stack space={'var(--scale-24)'} direction='VERTICAL' localStyles={{padding: 'var(--scale-48)'}}>
          <Box localStyles={{ marginBottom: 'var(--scale-24)' }}>
            <Heading level="3">Component / Body [Light]</Heading>
          </Box>
          <Body size="S">The green pepe ape jumps over the lazy toad</Body>
          <Body size="M">The green pepe ape jumps over the lazy toad</Body>
          <Body size="L">The green pepe ape jumps over the lazy toad</Body>
          <Body size="S" weight='BOLD'>The green pepe ape jumps over the lazy toad</Body>
          <Body size="M" weight='BOLD'>The green pepe ape jumps over the lazy toad</Body>
          <Body size="L" weight='BOLD'>The green pepe ape jumps over the lazy toad</Body>
        </Stack>

        {/* BODY - DARK */}
        <Stack space={'var(--scale-24)'} direction='VERTICAL' localStyles={{padding: 'var(--scale-48)', background: 'white'}}>
          <Box localStyles={{ marginBottom: 'var(--scale-24)' }}>
            <Heading level="3" theme='DARK'>Component / Body [Light]</Heading>
          </Box>
          <Body size="S" theme='DARK'>The green pepe ape jumps over the lazy toad</Body>
          <Body size="M" theme='DARK'>The green pepe ape jumps over the lazy toad</Body>
          <Body size="L" theme='DARK'>The green pepe ape jumps over the lazy toad</Body>
          <Body size="S" weight='BOLD' theme='DARK'>The green pepe ape jumps over the lazy toad</Body>
          <Body size="M" weight='BOLD' theme='DARK'>The green pepe ape jumps over the lazy toad</Body>
          <Body size="L" weight='BOLD' theme='DARK'>The green pepe ape jumps over the lazy toad</Body>
        </Stack>

        {/* FOOTER */}
        <Footer
          localStyles={{position: 'fixed', bottom: 0, left: 0}} 
          socials={
            <>
              <Link iconOnly href="./"><Discord theme="LIGHT" size="S" /></Link>
              <Link iconOnly href="./"><Twitter theme="LIGHT" size="S" /></Link>
              <Link iconOnly href="./"><Youtube theme="LIGHT" size="S" /></Link>
            </>
          } 
        />

      </Stack>
    </>
  );
}

export default DesignSystem;
