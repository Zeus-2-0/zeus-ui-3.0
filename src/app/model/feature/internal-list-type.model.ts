import {InternalListCode} from "./internal-list-code.model";

export class InternalListType {

  /**
   * The display name that should be used in the UI
   */
  displayName !: string | null

  /**
   * The name of the internal list type
   */
  internalListTypeName !: string;

  /**
   * The description of the internal list type
   */
  internalListTypeDesc !: string | null;

  /**
   * Contains the internal list code that are associated with the internal list type
   */
  internalRefDataList !: InternalListCode[];

  /**
   * Constructor of the model
   * @param displayName
   * @param internalListTypeName
   * @param internalListTypeDesc
   * @param internalRefDataList
   */
  constructor(displayName : string | null,
              internalListTypeName : string,
              internalListTypeDesc: string | null,
              internalRefDataList: InternalListCode[]) {
    this.displayName = displayName;
    this.internalListTypeName = internalListTypeName;
    this.internalListTypeDesc = internalListTypeDesc;
    this.internalRefDataList = internalRefDataList;
  }
}
