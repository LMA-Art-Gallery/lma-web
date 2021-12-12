import type { NextPage } from 'next'
import React from 'react'; 

import Template1 from './Template1'; 
import Template2 from './Template2'; 
import Template3 from './Template3'; 
import Template4 from './Template4'; 
import Template5 from './Template5'; 


interface TemplateSelectionProps {
  id: number,
  collection: any,
}

export const TemplateSelection: NextPage<TemplateSelectionProps> = ({id, ...props}) => {
  let Output; 
  switch (id) {
    case 1:
      Output = (<Template1 {...props} />);
      break;
    case 2:
      Output = (<Template2 {...props} />);
      break;
    case 3:
      Output = (<Template3 {...props} />);
      break;
    case 4:
      Output = (<Template4 {...props} />);
      break;
    case 5:
      Output = (<Template5 {...props} />);
      break;
    default:
      Output = (<Template1 {...props} />); 
      break;
  }

  return Output; 
};

export default TemplateSelection;