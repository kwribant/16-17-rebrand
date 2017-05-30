// Types
import { PortfolioPieceDict } from '../typings';

// Content
import { ArborData } from './portfolio-pieces/arbor';
import { DropboxBusinessRedesignData } from './portfolio-pieces/dropbox-business-redesign';
import { DropaboutData } from './portfolio-pieces/dropabout';
import { DowngradeRedesignData } from './portfolio-pieces/downgrade-redesign';

export const PortfolioPieces: PortfolioPieceDict = {
  'arbor': ArborData,
  'dropbox-business-redesign': DropboxBusinessRedesignData,
  'dropbox-business-downgrade-redesign': DowngradeRedesignData,
  'dropabout-redesign': DropaboutData
};

export const PortfolioPieceList: {
  [key: string]: {
    [key: string]: string
  }
} = {
  'arbor': {
    headline: 'Arbor',
    copy: 'Component library and SCSS framework paired as a source of truth for development and design',
  },
  'dropbox-business-downgrade-redesign': {
    headline: 'Dropbox Business Downgrade Redesign',
    copy: 'Redesign and re-architecture of Dropbox Business’ downgrade experience',
  },
  'dropbox-business-redesign': {
    headline: 'Dropbox Business Redesign',
    copy: 'Dropbox Business gets a visual overhaul and a first pass at going responsive',
  },
  'dropabout-redesign': {
    headline: 'Dropabout Refactor + Redesign',
    copy: 'Dropbox’s internal employee catalog establishes a new visual language for internal apps',
  },
};
