import { Router } from 'express';
import * as controller from '../controllers/person';
import { requireBody, requireQuery } from '../middleware';
import { requireAuth } from '../middleware/auth';

const router: Router = Router();

router.post('/',
  requireAuth,
  requireBody({
    firstname: { type: 'string', },
    lastname: { type: 'string', },
    bio: { type: 'string', optional: true, },
    birthdate: { type: 'string', optional: true, },
    deathdate: { type: 'string', optional: true, },
  }), 
  controller.create
);
router.get('/', requireQuery({ q: { type: 'string', }, }), controller.search);
router.get('/:pid', controller.parsePid, controller.get);
router.get('/:pid/name', controller.parsePid, controller.getName);
router.patch('/:pid', 
  requireAuth,
  requireBody({
    firstname: { type: 'string', optional: true, },
    lastname: { type: 'string', optional: true, },
    bio: { type: 'string', optional: true, },
    birthdate: { type: 'string', optional: true, },
    deathdate: { type: 'string', optional: true, },
  }), 
  controller.parsePid, 
  controller.update
);
router.delete('/:pid', requireAuth, controller.parsePid, controller.remove);

router.get('/:pid/pic', controller.parsePid, controller.getPic);
router.post('/:pid/pic', requireAuth, controller.parsePid, controller.setPic);
router.delete('/:pid/pic', requireAuth, controller.parsePid, controller.removePic);

router.post('/:pid/relation', 
  requireAuth,
  requireBody({
    type: { type: 'number', },
    other: { type: 'number', },
    sources: { type: 'array', items: 'string', },
    since: { type: 'string', },
    until: { type: 'string', optional: true, },
  }), 
  controller.parsePid, 
  controller.addRelation
);
router.patch('/:pid/relation', 
  requireAuth,
  requireBody({
    type: { type: 'number', },
    other: { type: 'number', },
    since: { type: 'string', },
    until: { type: 'string', optional: true, },
  }), 
  controller.parsePid, 
  controller.updateRelation
);
router.delete('/:pid/relation', 
  requireAuth,
  requireBody({
    type: { type: 'number', },
    other: { type: 'number', },
    since: { type: 'string', },
  }), 
  controller.parsePid, 
  controller.removeRelation
);
router.get('/:pid/parents', controller.parsePid, controller.getParents);
router.get('/:pid/children', controller.parsePid, controller.getChildren);
router.get('/:pid/romantic', controller.parsePid, controller.getRomantic);
router.get('/:pid/friends', controller.parsePid, controller.getFriends);

router.get('/:pid/relation/sources', 
  requireQuery({
    other: { type: 'string', },
    since: { type: 'string', },
  }), 
  controller.parsePid, 
  controller.getRelationSources
);
router.post('/:pid/relation/sources', 
  requireAuth,
  requireBody({
    other: { type: 'number', },
    since: { type: 'string', },
    url: { type: 'string', },
  }), 
  controller.parsePid, 
  controller.addRelationSource
);
router.patch('/:pid/relation/sources/:sid', 
  requireAuth,
  requireBody({
    url: { type: 'string', },
  }), 
  controller.parsePid, 
  controller.updateRelationSource
);
router.delete('/:pid/relation/sources/:sid', requireAuth, controller.parsePid, controller.removeRelationSource);

export default router;
