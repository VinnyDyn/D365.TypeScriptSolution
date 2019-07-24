interface Connection_Base extends WebEntity {
  connectionid?: string | null;
  createdon?: Date | null;
  description?: string | null;
  effectiveend?: Date | null;
  effectivestart?: Date | null;
  entityimageid?: string | null;
  exchangerate?: number | null;
  importsequencenumber?: number | null;
  ismaster?: boolean | null;
  modifiedon?: Date | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  record1objecttypecode?: connection_record1objecttypecode | null;
  record2objecttypecode?: connection_record2objecttypecode | null;
  statecode?: connection_statecode | null;
  statuscode?: connection_statuscode | null;
  versionnumber?: number | null;
}
interface Connection_Relationships {
  connection_related_connection?: Connection_Result[] | null;
  record1id_account?: Account_Result | null;
  record1id_contact?: Contact_Result | null;
  record2id_account?: Account_Result | null;
  record2id_contact?: Contact_Result | null;
}
interface Connection extends Connection_Base, Connection_Relationships {
  channelaccessprofileruleid_bind$channelaccessprofilerules?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
  profileruleid1_bind$channelaccessprofilerules?: string | null;
  record1id_account_bind$accounts?: string | null;
  record1id_activitypointer_bind$activitypointers?: string | null;
  record1id_appointment_bind$appointments?: string | null;
  record1id_campaign_bind$campaigns?: string | null;
  record1id_campaignactivity_bind$campaignactivities?: string | null;
  record1id_competitor_bind$competitors?: string | null;
  record1id_constraintbasedgroup_bind$constraintbasedgroups?: string | null;
  record1id_contact_bind$contacts?: string | null;
  record1id_contract_bind$contracts?: string | null;
  record1id_email_bind$emails?: string | null;
  record1id_entitlement_bind$entitlements?: string | null;
  record1id_entitlementchannel_bind$entitlementchannels?: string | null;
  record1id_entitlementtemplatechannel_bind$entitlementtemplatechannels?: string | null;
  record1id_equipment_bind$equipments?: string | null;
  record1id_fax_bind$faxes?: string | null;
  record1id_goal_bind$goals?: string | null;
  record1id_incident_bind$incidents?: string | null;
  record1id_invoice_bind$invoices?: string | null;
  record1id_knowledgearticle_bind$knowledgearticles?: string | null;
  record1id_knowledgebaserecord_bind$knowledgebaserecords?: string | null;
  record1id_lead_bind$leads?: string | null;
  record1id_letter_bind$letters?: string | null;
  record1id_list_bind$lists?: string | null;
  record1id_msdyn_postalbum_bind$msdyn_postalbums?: string | null;
  record1id_msfp_surveyinvite_bind$msfp_surveyinvites?: string | null;
  record1id_msfp_surveyresponse_bind$msfp_surveyresponses?: string | null;
  record1id_opportunity_bind$opportunities?: string | null;
  record1id_phonecall_bind$phonecalls?: string | null;
  record1id_position_bind$positions?: string | null;
  record1id_pricelevel_bind$pricelevels?: string | null;
  record1id_processsession_bind$processsessions?: string | null;
  record1id_product_bind$products?: string | null;
  record1id_quote_bind$quotes?: string | null;
  record1id_recurringappointmentmaster_bind$recurringappointmentmasters?: string | null;
  record1id_resourcegroup_bind$resourcegroups?: string | null;
  record1id_salesorder_bind$salesorders?: string | null;
  record1id_serviceappointment_bind$serviceappointments?: string | null;
  record1id_socialactivity_bind$socialactivities?: string | null;
  record1id_socialprofile_bind$socialprofiles?: string | null;
  record1id_systemuser_bind$systemusers?: string | null;
  record1id_task_bind$tasks?: string | null;
  record1id_team_bind$teams?: string | null;
  record1id_territory_bind$territories?: string | null;
  record1roleid_bind$connectionroles?: string | null;
  record2id_account_bind$accounts?: string | null;
  record2id_activitypointer_bind$activitypointers?: string | null;
  record2id_appointment_bind$appointments?: string | null;
  record2id_campaign_bind$campaigns?: string | null;
  record2id_campaignactivity_bind$campaignactivities?: string | null;
  record2id_competitor_bind$competitors?: string | null;
  record2id_constraintbasedgroup_bind$constraintbasedgroups?: string | null;
  record2id_contact_bind$contacts?: string | null;
  record2id_contract_bind$contracts?: string | null;
  record2id_email_bind$emails?: string | null;
  record2id_entitlement_bind$entitlements?: string | null;
  record2id_entitlementchannel_bind$entitlementchannels?: string | null;
  record2id_entitlementtemplatechannel_bind$entitlementtemplatechannels?: string | null;
  record2id_equipment_bind$equipments?: string | null;
  record2id_fax_bind$faxes?: string | null;
  record2id_goal_bind$goals?: string | null;
  record2id_incident_bind$incidents?: string | null;
  record2id_invoice_bind$invoices?: string | null;
  record2id_knowledgearticle_bind$knowledgearticles?: string | null;
  record2id_knowledgebaserecord_bind$knowledgebaserecords?: string | null;
  record2id_lead_bind$leads?: string | null;
  record2id_letter_bind$letters?: string | null;
  record2id_list_bind$lists?: string | null;
  record2id_msdyn_postalbum_bind$msdyn_postalbums?: string | null;
  record2id_msfp_surveyinvite_bind$msfp_surveyinvites?: string | null;
  record2id_msfp_surveyresponse_bind$msfp_surveyresponses?: string | null;
  record2id_opportunity_bind$opportunities?: string | null;
  record2id_phonecall_bind$phonecalls?: string | null;
  record2id_position_bind$positions?: string | null;
  record2id_pricelevel_bind$pricelevels?: string | null;
  record2id_processsession_bind$processsessions?: string | null;
  record2id_product_bind$products?: string | null;
  record2id_quote_bind$quotes?: string | null;
  record2id_recurringappointmentmaster_bind$recurringappointmentmasters?: string | null;
  record2id_resourcegroup_bind$resourcegroups?: string | null;
  record2id_salesorder_bind$salesorders?: string | null;
  record2id_serviceappointment_bind$serviceappointments?: string | null;
  record2id_socialactivity_bind$socialactivities?: string | null;
  record2id_socialprofile_bind$socialprofiles?: string | null;
  record2id_systemuser_bind$systemusers?: string | null;
  record2id_task_bind$tasks?: string | null;
  record2id_team_bind$teams?: string | null;
  record2id_territory_bind$territories?: string | null;
  record2roleid_bind$connectionroles?: string | null;
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface Connection_Create extends Connection {
}
interface Connection_Update extends Connection {
}
interface Connection_Select {
  connectionid: WebAttribute<Connection_Select, { connectionid: string | null }, {  }>;
  createdby_guid: WebAttribute<Connection_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<Connection_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<Connection_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  description: WebAttribute<Connection_Select, { description: string | null }, {  }>;
  effectiveend: WebAttribute<Connection_Select, { effectiveend: Date | null }, { effectiveend_formatted?: string }>;
  effectivestart: WebAttribute<Connection_Select, { effectivestart: Date | null }, { effectivestart_formatted?: string }>;
  entityimageid: WebAttribute<Connection_Select, { entityimageid: string | null }, {  }>;
  exchangerate: WebAttribute<Connection_Select, { exchangerate: number | null }, {  }>;
  importsequencenumber: WebAttribute<Connection_Select, { importsequencenumber: number | null }, {  }>;
  ismaster: WebAttribute<Connection_Select, { ismaster: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<Connection_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<Connection_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<Connection_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<Connection_Select, { name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<Connection_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<Connection_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<Connection_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<Connection_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<Connection_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  record1id_guid: WebAttribute<Connection_Select, { record1id_guid: string | null }, { record1id_formatted?: string }>;
  record1objecttypecode: WebAttribute<Connection_Select, { record1objecttypecode: connection_record1objecttypecode | null }, { record1objecttypecode_formatted?: string }>;
  record1roleid_guid: WebAttribute<Connection_Select, { record1roleid_guid: string | null }, { record1roleid_formatted?: string }>;
  record2id_guid: WebAttribute<Connection_Select, { record2id_guid: string | null }, { record2id_formatted?: string }>;
  record2objecttypecode: WebAttribute<Connection_Select, { record2objecttypecode: connection_record2objecttypecode | null }, { record2objecttypecode_formatted?: string }>;
  record2roleid_guid: WebAttribute<Connection_Select, { record2roleid_guid: string | null }, { record2roleid_formatted?: string }>;
  relatedconnectionid_guid: WebAttribute<Connection_Select, { relatedconnectionid_guid: string | null }, { relatedconnectionid_formatted?: string }>;
  statecode: WebAttribute<Connection_Select, { statecode: connection_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<Connection_Select, { statuscode: connection_statuscode | null }, { statuscode_formatted?: string }>;
  transactioncurrencyid_guid: WebAttribute<Connection_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  versionnumber: WebAttribute<Connection_Select, { versionnumber: number | null }, {  }>;
}
interface Connection_Filter {
  connectionid: XQW.Guid;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  description: string;
  effectiveend: Date;
  effectivestart: Date;
  entityimageid: XQW.Guid;
  exchangerate: any;
  importsequencenumber: number;
  ismaster: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  record1id_guid: XQW.Guid;
  record1objecttypecode: connection_record1objecttypecode;
  record1roleid_guid: XQW.Guid;
  record2id_guid: XQW.Guid;
  record2objecttypecode: connection_record2objecttypecode;
  record2roleid_guid: XQW.Guid;
  relatedconnectionid_guid: XQW.Guid;
  statecode: connection_statecode;
  statuscode: connection_statuscode;
  transactioncurrencyid_guid: XQW.Guid;
  versionnumber: number;
}
interface Connection_Expand {
  connection_related_connection: WebExpand<Connection_Expand, Connection_Select, Connection_Filter, { connection_related_connection: Connection_Result[] }>;
  record1id_account: WebExpand<Connection_Expand, Account_Select, Account_Filter, { record1id_account: Account_Result }>;
  record1id_contact: WebExpand<Connection_Expand, Contact_Select, Contact_Filter, { record1id_contact: Contact_Result }>;
  record2id_account: WebExpand<Connection_Expand, Account_Select, Account_Filter, { record2id_account: Account_Result }>;
  record2id_contact: WebExpand<Connection_Expand, Contact_Select, Contact_Filter, { record2id_contact: Contact_Result }>;
  relatedconnectionid: WebExpand<Connection_Expand, Connection_Select, Connection_Filter, { relatedconnectionid: Connection_Result }>;
}
interface Connection_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  effectiveend_formatted?: string;
  effectivestart_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  record1id_formatted?: string;
  record1objecttypecode_formatted?: string;
  record1roleid_formatted?: string;
  record2id_formatted?: string;
  record2objecttypecode_formatted?: string;
  record2roleid_formatted?: string;
  relatedconnectionid_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface Connection_Result extends Connection_Base, Connection_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  record1id_guid: string | null;
  record1roleid_guid: string | null;
  record2id_guid: string | null;
  record2roleid_guid: string | null;
  relatedconnectionid_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface Connection_RelatedOne {
  record1id_account: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  record1id_contact: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
  record2id_account: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  record2id_contact: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
  relatedconnectionid: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
}
interface Connection_RelatedMany {
  connection_related_connection: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
}
interface WebEntitiesRetrieve {
  connections: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
}
interface WebEntitiesRelated {
  connections: WebMappingRelated<Connection_RelatedOne,Connection_RelatedMany>;
}
interface WebEntitiesCUDA {
  connections: WebMappingCUDA<Connection_Create,Connection_Update,Connection_Select>;
}
