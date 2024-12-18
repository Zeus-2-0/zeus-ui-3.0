export class InternalListCode {

  /**
   * The display name that should be used in the UI
   */
  displayName !: string | null;

  /**
   * The internal list code
   */
  listCode !: string;

  /**
   * The internal list type that the code is associated
   */
  listTypeName !: string;

  /**
   * The description of the code
   */
  listCodeDesc !: string | null;

  /**
   * Constructor of the model
   * @param displayName
   * @param listCode
   * @param listTypeName
   * @param listCodeDesc
   */
  constructor(displayName: string | null,
              listCode: string,
              listTypeName: string,
              listCodeDesc: string | null) {
    this.displayName = displayName;
    this.listCode = listCode;
    this.listTypeName = listTypeName;
    this.listCodeDesc = listCodeDesc;
  }
}
