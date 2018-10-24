import React from 'react';
import Media from 'react-media';

import { Button, ButtonProps, ButtonGroup, Heading, Spacing } from '../components';
import { styled } from '../styles';
import { mediaBreakpoints } from '../themes/media_queries';

import styles from './styles';

const defaultProps = {};
type DefaultProps = typeof defaultProps;

interface Props<VIEW extends string> extends DefaultProps {
  children: React.ReactNode;
  activeView?: VIEW;
  menu?: { type: 'link' | 'view'; display: React.ReactNode; view?: VIEW; to?: string }[];
  setView?: (view?: VIEW) => any;
  title?: string | React.ReactElement<any>;
}

const StyledPage = styled.div<{}>(...styles.page.container);

const StyledPageMenu = styled(ButtonGroup)<{}>(...styles.page.menu);

const StyledButton = styled(Button as any)<{ isActive: boolean } & ButtonProps>(...styles.page.link);

const Page = <VIEW extends string>({ activeView, children, menu, setView = () => {}, title }: Props<VIEW>) => (
  <StyledPage>
    {menu && (
      <Media query={mediaBreakpoints.atMostKilo}>
        {matches => (
          <StyledPageMenu align="center" fill flex mobile={matches}>
            {menu.map(({ display, type, view, to = '' }) =>
              type === 'view' ? (
                <StyledButton
                  as="button"
                  onClick={() => setView(view)}
                  isActive={!!view && view === activeView}
                  color="neutral"
                  coloring={{ shade: 7 }}
                  padding="s"
                  shape="square"
                  size="deci"
                  variant="text"
                  width="yocto"
                  key={view}
                  tabIndex="0"
                >
                  {display}
                </StyledButton>
              ) : (
                <StyledButton
                  as="Link"
                  to={to}
                  onClick={() => setView(view)}
                  isActive={!!view && view === activeView}
                  color="neutral"
                  coloring={{ shade: 7 }}
                  padding="s"
                  shape="square"
                  size="deci"
                  variant="text"
                  width="yocto"
                  key={to}
                  tabIndex="0"
                >
                  {display}
                </StyledButton>
              )
            )}
          </StyledPageMenu>
        )}
      </Media>
    )}
    {title && (
      <Spacing top size="mega">
        {typeof title === 'string' ? <Heading>{title}</Heading> : title}
      </Spacing>
    )}
    {children}
  </StyledPage>
);

Page.defaultProps = defaultProps;

export default Page;
