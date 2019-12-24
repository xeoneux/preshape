import * as React from 'react' ;
import {
  Button,
  Buttons,
  Flex,
  Icon,
  Placement,
  PlacementProps,
  PlacementArrow,
  PlacementArrowProps,
  PlacementContent,
  PlacementContentProps,
  PlacementManager,
  PlacementManagerProps,
  PlacementReference,
  PlacementReferenceProps,
} from 'preshape';
import { CatalogueItem } from '.';

const Item: CatalogueItem<{
  Placement: PlacementProps;
  PlacementArrow: PlacementArrowProps;
  PlacementContent: PlacementContentProps;
  PlacementManager: PlacementManagerProps;
  PlacementReference: PlacementReferenceProps;
}> = {
  name: 'Placement',
  description: '',
  type: 'component',
  showcase: {
    Component: (props) => (
      <Flex alignChildren="middle" direction="horizontal">
        <PlacementManager { ...props.PlacementManager }>
          <PlacementReference { ...props.PlacementReference }>
            { (props) => (
              <Icon { ...props } name="Star" size="2rem" />
            ) }
          </PlacementReference>

          <Placement { ...props.Placement } zIndex={ 1 }>
            <PlacementArrow backgroundColor="text-shade-1" />
            <PlacementContent
                backgroundColor="text-shade-1"
                borderRadius="x1"
                padding="x1"
                textColor="background-shade-1">
              <Buttons joined>
                <Button fill>
                  <Icon name="Pencil" size="1rem" />
                </Button>

                <Button fill>
                  <Icon name="Copy" size="1rem" />
                </Button>

                <Button fill>
                  <Icon name="Water" size="1rem" />
                </Button>
              </Buttons>
            </PlacementContent>
          </Placement>
        </PlacementManager>
      </Flex>
    ),
    state: {
      Placement: {
        placement: 'top',
      },
      PlacementArrow: {},
      PlacementContent: {},
      PlacementManager: {},
      PlacementReference: {},
    },
  },
  apis: [{
    module:'"Placement/Placement"',
    name: 'PlacementProps',
    rename: 'Placement',
  }, {
    module:'"Placement/PlacementArrow"',
    name: 'PlacementArrowProps',
    rename: 'PlacementArrow',
  }, {
    module:'"Placement/PlacementContent"',
    name: 'PlacementContentProps',
    rename: 'PlacementContent',
  }, {
    module:'"Placement/PlacementManager"',
    name: 'PlacementManagerProps',
    rename: 'PlacementManager',
  }, {
    module:'"Placement/PlacementReference"',
    name: 'PlacementReferenceProps',
    rename: 'PlacementReference',
  }],
};

export default Item;