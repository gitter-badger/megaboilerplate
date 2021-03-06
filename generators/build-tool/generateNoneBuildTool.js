import { set } from 'lodash';
import { getModule, replaceCodeMemory, addNpmPackageMemory } from '../utils';

export default async function generateNoneBuildTool(params) {
  switch (params.cssPreprocessor) {
    case 'sass':
      await replaceCodeMemory(params, 'server.js', 'CSS_PREPROCESSOR_MIDDLEWARE_REQUIRE', await getModule('build-tool/none/sass-middleware-require.js'));
      await replaceCodeMemory(params, 'server.js', 'CSS_PREPROCESSOR_MIDDLEWARE', await getModule('build-tool/none/sass-middleware.js'));
      await addNpmPackageMemory('node-sass-middleware', params);
      break;
    case 'less':
      await replaceCodeMemory(params, 'server.js', 'CSS_PREPROCESSOR_MIDDLEWARE_REQUIRE', await getModule('build-tool/none/less-middleware-require.js'));
      await replaceCodeMemory(params, 'server.js', 'CSS_PREPROCESSOR_MIDDLEWARE', await getModule('build-tool/none/less-middleware.js'));
      await addNpmPackageMemory('node-sass-middleware', params);
      break;
    case 'postcss':
      await replaceCodeMemory(params, 'server.js', 'CSS_PREPROCESSOR_MIDDLEWARE_REQUIRE', await getModule('build-tool/none/postcss-middleware-require.js'));
      await replaceCodeMemory(params, 'server.js', 'CSS_PREPROCESSOR_MIDDLEWARE', await getModule('build-tool/none/postcss-middleware.js'));
      await addNpmPackageMemory('postcss-middleware', params);
      break;
    default:
      break;
  }
}
