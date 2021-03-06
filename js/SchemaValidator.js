import Ajv from 'ajv';
import actionSchema from './schema/action.json';
import basicSchema from './schema/basic.json';
import styleSchema from './schema/style.json';
import buttonSchema from './schema/button.json';
import cardSchema from './schema/card.json';
import carouselSchema from './schema/carousel.json';
import imagelSchema from './schema/image.json';
import linkPreviewSchema from './schema/linkPreview.json';
import mapSchema from './schema/map.json';
import richContentSchema from './schema/rich_content.json';
import templateSchema from './schema/template.json';
import textSchema from './schema/text.json';

export default class SchemaValidator {

  jsonValidator: Ajv;

  constructor() {
    const ajv = new Ajv({ format: 'full', unknownFormats: 'ignore', verbose: true, logger: false });
    ajv.addSchema(actionSchema, 'action.json');
    ajv.addSchema(basicSchema, 'basic.json');
    ajv.addSchema(styleSchema, 'style.json');
    ajv.addSchema(buttonSchema, 'button.json');
    ajv.addSchema(cardSchema, 'card.json');
    ajv.addSchema(carouselSchema, 'carousel.json');
    ajv.addSchema(imagelSchema, 'image.json');
    ajv.addSchema(linkPreviewSchema, 'linkPreview.json');
    ajv.addSchema(mapSchema, 'map.json');
    ajv.addSchema(richContentSchema, 'rich_content.json');
    ajv.addSchema(templateSchema, 'template.json');
    ajv.addSchema(textSchema, 'text.json');
    this.jsonValidator = ajv.compile(richContentSchema);
  }

  validate(json) {
    const valid = this.jsonValidator(json);

    return {
      valid,
      errors: valid ? this.jsonValidator.errors : undefined,
    };
  }
}
