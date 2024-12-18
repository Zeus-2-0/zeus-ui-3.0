import {InternalListType} from "./internal-list-type.model";

export class InternalListTypes{

  /**
   * The list of internal list types
   */
  public internalListTypes !: InternalListType[];

  /**
   * Constructor of the model
   * @param internalListTypes
   */
  constructor(internalListTypes: InternalListType[]) {
    this.internalListTypes = internalListTypes;
  }
}
