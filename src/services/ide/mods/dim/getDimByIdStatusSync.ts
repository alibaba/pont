
    /**
     * @desc 同步获取维度发布状态
     */

    import * as defs from '../../baseClass';
    import pontFetch from 'src/utils/pontFetch';

    export 
      class Params {
        
      /** id */
      id?: number;
      /** projectId */
      projectId?: number;
      }
    
    export const init = ''0'';

    export async function request(params) {
      return pontFetch({
        url: '/api/dim/{id}/status/sync',
        params,
        method: 'get',
      });
    }
   