import Person from './Person';
import RelationType from './RelationTypes';

/**
 * Represents the relation with another person.
 */
class Relation {
  /**
   * The unique identifier of the relation.
   */
  public id: number;
  /**
   * The type of the relation.
   */
  public type: RelationType;
  /**
   * The other person in the relation.
   */
  public other: Person;
  /**
   * The date the relation started.
   */
  public since?: Date;
  /**
   * The date the relation ended.
   */
  public until?: Date;

  public constructor (type: RelationType, other: Person, since?: Date, until?: Date);
  public constructor (id: number, type: RelationType, other: Person, since?: Date, until?: Date);
  public constructor (id: number|RelationType, type: RelationType|Person, other?: Person|Date, since?: Date, until?: Date) {
    if (typeof id === 'number') {
      this.id = id;
      this.type = type as RelationType;
      this.other = other as Person;
      this.since = since;
      this.until = until;
    } else {
      this.id = -1;
      this.type = id as RelationType;
      this.other = type as Person;
      this.since = other as Date;
      this.until = since;
    }
  }
}

export default Relation;
