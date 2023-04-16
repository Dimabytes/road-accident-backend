import { MigrationInterface, QueryRunner } from "typeorm";

export class init1681638232682 implements MigrationInterface {
    name = 'init1681638232682'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "accident_type" ("id" varchar PRIMARY KEY NOT NULL, "label" text NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "settlement_type" ("id" varchar PRIMARY KEY NOT NULL, "label" text NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "settlement_status" ("id" varchar PRIMARY KEY NOT NULL, "label" text NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "street_category" ("id" varchar PRIMARY KEY NOT NULL, "label" text NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "road_category" ("id" varchar PRIMARY KEY NOT NULL, "label" text NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "cover_type" ("id" varchar PRIMARY KEY NOT NULL, "label" text NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "divider_type" ("id" varchar PRIMARY KEY NOT NULL, "label" text NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "horizontal_markup" ("id" varchar PRIMARY KEY NOT NULL, "label" text NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "vertical_markup" ("id" varchar PRIMARY KEY NOT NULL, "label" text NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "temporary_markup" ("id" varchar PRIMARY KEY NOT NULL, "label" text NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "crossing_category" ("id" varchar PRIMARY KEY NOT NULL, "label" text NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "participant_category" ("id" varchar PRIMARY KEY NOT NULL, "label" text NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "steering_wheel_position" ("id" varchar PRIMARY KEY NOT NULL, "label" text NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "vehicle_category" ("id" varchar PRIMARY KEY NOT NULL, "label" text NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "country" ("id" varchar PRIMARY KEY NOT NULL, "label" text NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "vehicle_type" ("id" varchar PRIMARY KEY NOT NULL, "label" text NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "ownership_form" ("id" varchar PRIMARY KEY NOT NULL, "label" text NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "engine_type" ("id" varchar PRIMARY KEY NOT NULL, "label" text NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "tire_type" ("id" varchar PRIMARY KEY NOT NULL, "label" text NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "type_of_drive" ("id" varchar PRIMARY KEY NOT NULL, "label" text NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "control_type" ("id" varchar PRIMARY KEY NOT NULL, "label" text NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "accident_participant" ("id" varchar PRIMARY KEY NOT NULL, "vehicleParticipant" text NOT NULL, "drivingExperience" real NOT NULL, "drivingTime" text NOT NULL, "driverLicense" text NOT NULL, "medicalOrderNumber" text NOT NULL, "passengerSeatVehicle" text NOT NULL, "pedestrianLocation" text NOT NULL, "pedestrianDirection" text NOT NULL, "inattentiveFactors" text NOT NULL, "trafficViolations" text NOT NULL, "legalDecision" text NOT NULL, "severityConsequencesAccident" text NOT NULL, "medicalOrganizationName" text NOT NULL, "isMedicalOrganizationDelivery" boolean NOT NULL, "isMedicalAidAccident" boolean NOT NULL, "isSpecialEquipment" boolean NOT NULL, "isSeatBeltFastened" boolean NOT NULL, "isDangerousCargoAdmission" boolean NOT NULL, "isPassengerFall" boolean NOT NULL, "isReflectiveElementsAvailable" boolean NOT NULL, "isChildSeatFastened" boolean NOT NULL, "isDriverWanted" boolean NOT NULL, "isDriverDrunk" boolean NOT NULL, "isParticipantLeftDetected" boolean NOT NULL, "isAccidentLeft" boolean NOT NULL, "participantCategoryId" varchar NOT NULL, "roadAccidentId" varchar NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "car" ("id" varchar PRIMARY KEY NOT NULL, "color" text NOT NULL, "yearOfIssue" text NOT NULL, "weightWithoutLoad" text NOT NULL, "weightMaxPermitted" text NOT NULL, "odometerStatus" text NOT NULL, "mileage" real NOT NULL, "motorPower" text NOT NULL, "maxSpeed" real NOT NULL, "passengerCapacity" real NOT NULL, "carBrand" text NOT NULL, "carModel" text NOT NULL, "VIN" text NOT NULL, "chassisNumber" text NOT NULL, "vehicleBodyNumber" text NOT NULL, "engineNumber" text NOT NULL, "stateRegistrationPlate" text NOT NULL, "registrationCertificateNumber" text NOT NULL, "technicalFaults" text NOT NULL, "additionalEquipment" text NOT NULL, "tachographUsageDetails" text NOT NULL, "vehicleDamage" text NOT NULL, "contourMarking" text NOT NULL, "isCargoDangerous" boolean NOT NULL, "isLicenseAvailable" boolean NOT NULL, "isInsurancePolicyAvailable" boolean NOT NULL, "isSelfBalancingMechanism" boolean NOT NULL, "isDriverLeft" boolean NOT NULL, "isDriverWanted" boolean NOT NULL, "usageReason" text NOT NULL, "transportationCharacteristics" text NOT NULL, "transportationOrganizationMeasures" text NOT NULL, "organization" text NOT NULL, "INN" text NOT NULL, "legalForm" text NOT NULL, "registrationAddress" text NOT NULL, "vehicleTypeId" varchar NOT NULL, "vehicleCategoryId" varchar NOT NULL, "steeringWheelPositionId" varchar NOT NULL, "typeOfDriveId" varchar NOT NULL, "controlTypeId" varchar NOT NULL, "engineTypeId" varchar NOT NULL, "tireTypeId" varchar NOT NULL, "manufacturerCountryId" varchar NOT NULL, "registrationCountryId" varchar NOT NULL, "ownershipFormId" varchar NOT NULL, "roadAccidentId" varchar NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "road_accident" ("id" varchar PRIMARY KEY NOT NULL, "accidentDatetime" datetime NOT NULL, "fullAddress" text NOT NULL, "population" real NOT NULL, "distance" text NOT NULL, "diedNumber" real NOT NULL, "injuredNumber" real NOT NULL, "accidentDescription" text NOT NULL, "scheme" text NOT NULL, "numberOfLanes" real NOT NULL, "accidentLane" real NOT NULL, "roadwayWidth" real NOT NULL, "sidewalkWidth" real NOT NULL, "dividerWidth" real NOT NULL, "roadsideWidth" real NOT NULL, "permissibleAxialLoad" text NOT NULL, "speedLimit" real NOT NULL, "roadNetworkObjects" text NOT NULL, "nearestEducationalOrganizations" text NOT NULL, "crossingName" text NOT NULL, "serviceOrganization" text NOT NULL, "crossingOwner" text NOT NULL, "isAttendantAvailable" boolean NOT NULL, "isControlsAvailable" boolean NOT NULL, "isSpecialTechnicalsAvailable" boolean NOT NULL, "isBarrierAvailable" boolean NOT NULL, "isFenceAvailable" boolean NOT NULL, "isTrafficLightsAvailable" boolean NOT NULL, "isRoadSignsAvailable" boolean NOT NULL, "geographicalCoordinates" text NOT NULL, "weatherCondition" text NOT NULL, "lighting" text NOT NULL, "roadwayCondition" text NOT NULL, "transportOperationalStateDisadvantages" text NOT NULL, "equippingDisadvantages" text NOT NULL, "responseTime" text NOT NULL, "inspectorsActions" text NOT NULL, "timeOfRegistration" time NOT NULL, "accidentTypeId" varchar NOT NULL, "settlementStatusId" varchar NOT NULL, "settlementTypeId" varchar NOT NULL, "streetCategoryId" varchar NOT NULL, "roadId" varchar NOT NULL, "coverTypeId" varchar NOT NULL, "dividerTypeId" varchar NOT NULL, "horizontalMarkupId" varchar NOT NULL, "temporaryMarkupId" varchar NOT NULL, "verticalMarkupId" varchar NOT NULL, "crossingCategoryId" varchar NOT NULL, "trafficPoliceOfficerId" varchar NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "user" ("id" varchar PRIMARY KEY NOT NULL, "name" text NOT NULL, "department" text NOT NULL, "username" text NOT NULL, "password" text NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')))`);
        await queryRunner.query(`CREATE TABLE "temporary_accident_participant" ("id" varchar PRIMARY KEY NOT NULL, "vehicleParticipant" text NOT NULL, "drivingExperience" real NOT NULL, "drivingTime" text NOT NULL, "driverLicense" text NOT NULL, "medicalOrderNumber" text NOT NULL, "passengerSeatVehicle" text NOT NULL, "pedestrianLocation" text NOT NULL, "pedestrianDirection" text NOT NULL, "inattentiveFactors" text NOT NULL, "trafficViolations" text NOT NULL, "legalDecision" text NOT NULL, "severityConsequencesAccident" text NOT NULL, "medicalOrganizationName" text NOT NULL, "isMedicalOrganizationDelivery" boolean NOT NULL, "isMedicalAidAccident" boolean NOT NULL, "isSpecialEquipment" boolean NOT NULL, "isSeatBeltFastened" boolean NOT NULL, "isDangerousCargoAdmission" boolean NOT NULL, "isPassengerFall" boolean NOT NULL, "isReflectiveElementsAvailable" boolean NOT NULL, "isChildSeatFastened" boolean NOT NULL, "isDriverWanted" boolean NOT NULL, "isDriverDrunk" boolean NOT NULL, "isParticipantLeftDetected" boolean NOT NULL, "isAccidentLeft" boolean NOT NULL, "participantCategoryId" varchar NOT NULL, "roadAccidentId" varchar NOT NULL, CONSTRAINT "FK_002c88ddf1d8881d377b35b9a6d" FOREIGN KEY ("participantCategoryId") REFERENCES "participant_category" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_338422c70a0e971f9cd65134fbf" FOREIGN KEY ("roadAccidentId") REFERENCES "road_accident" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_accident_participant"("id", "vehicleParticipant", "drivingExperience", "drivingTime", "driverLicense", "medicalOrderNumber", "passengerSeatVehicle", "pedestrianLocation", "pedestrianDirection", "inattentiveFactors", "trafficViolations", "legalDecision", "severityConsequencesAccident", "medicalOrganizationName", "isMedicalOrganizationDelivery", "isMedicalAidAccident", "isSpecialEquipment", "isSeatBeltFastened", "isDangerousCargoAdmission", "isPassengerFall", "isReflectiveElementsAvailable", "isChildSeatFastened", "isDriverWanted", "isDriverDrunk", "isParticipantLeftDetected", "isAccidentLeft", "participantCategoryId", "roadAccidentId") SELECT "id", "vehicleParticipant", "drivingExperience", "drivingTime", "driverLicense", "medicalOrderNumber", "passengerSeatVehicle", "pedestrianLocation", "pedestrianDirection", "inattentiveFactors", "trafficViolations", "legalDecision", "severityConsequencesAccident", "medicalOrganizationName", "isMedicalOrganizationDelivery", "isMedicalAidAccident", "isSpecialEquipment", "isSeatBeltFastened", "isDangerousCargoAdmission", "isPassengerFall", "isReflectiveElementsAvailable", "isChildSeatFastened", "isDriverWanted", "isDriverDrunk", "isParticipantLeftDetected", "isAccidentLeft", "participantCategoryId", "roadAccidentId" FROM "accident_participant"`);
        await queryRunner.query(`DROP TABLE "accident_participant"`);
        await queryRunner.query(`ALTER TABLE "temporary_accident_participant" RENAME TO "accident_participant"`);
        await queryRunner.query(`CREATE TABLE "temporary_car" ("id" varchar PRIMARY KEY NOT NULL, "color" text NOT NULL, "yearOfIssue" text NOT NULL, "weightWithoutLoad" text NOT NULL, "weightMaxPermitted" text NOT NULL, "odometerStatus" text NOT NULL, "mileage" real NOT NULL, "motorPower" text NOT NULL, "maxSpeed" real NOT NULL, "passengerCapacity" real NOT NULL, "carBrand" text NOT NULL, "carModel" text NOT NULL, "VIN" text NOT NULL, "chassisNumber" text NOT NULL, "vehicleBodyNumber" text NOT NULL, "engineNumber" text NOT NULL, "stateRegistrationPlate" text NOT NULL, "registrationCertificateNumber" text NOT NULL, "technicalFaults" text NOT NULL, "additionalEquipment" text NOT NULL, "tachographUsageDetails" text NOT NULL, "vehicleDamage" text NOT NULL, "contourMarking" text NOT NULL, "isCargoDangerous" boolean NOT NULL, "isLicenseAvailable" boolean NOT NULL, "isInsurancePolicyAvailable" boolean NOT NULL, "isSelfBalancingMechanism" boolean NOT NULL, "isDriverLeft" boolean NOT NULL, "isDriverWanted" boolean NOT NULL, "usageReason" text NOT NULL, "transportationCharacteristics" text NOT NULL, "transportationOrganizationMeasures" text NOT NULL, "organization" text NOT NULL, "INN" text NOT NULL, "legalForm" text NOT NULL, "registrationAddress" text NOT NULL, "vehicleTypeId" varchar NOT NULL, "vehicleCategoryId" varchar NOT NULL, "steeringWheelPositionId" varchar NOT NULL, "typeOfDriveId" varchar NOT NULL, "controlTypeId" varchar NOT NULL, "engineTypeId" varchar NOT NULL, "tireTypeId" varchar NOT NULL, "manufacturerCountryId" varchar NOT NULL, "registrationCountryId" varchar NOT NULL, "ownershipFormId" varchar NOT NULL, "roadAccidentId" varchar NOT NULL, CONSTRAINT "FK_4255274beb0880981913121d108" FOREIGN KEY ("vehicleTypeId") REFERENCES "vehicle_type" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_e47d7d947d9d5273ced281ae4cf" FOREIGN KEY ("vehicleCategoryId") REFERENCES "vehicle_category" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_d973a3e2eb1714d5431ca077d97" FOREIGN KEY ("steeringWheelPositionId") REFERENCES "steering_wheel_position" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_5a305dd26d9b0e7af0708031df5" FOREIGN KEY ("typeOfDriveId") REFERENCES "type_of_drive" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_370ed67c4156fab3ab6e93c95cc" FOREIGN KEY ("controlTypeId") REFERENCES "control_type" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_af94b47e92f488e75c4882e79f2" FOREIGN KEY ("engineTypeId") REFERENCES "engine_type" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_11acd09fbca8bd8545de294d660" FOREIGN KEY ("tireTypeId") REFERENCES "tire_type" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_fb3fcae0407d3319dde183e7718" FOREIGN KEY ("manufacturerCountryId") REFERENCES "country" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_2771f9f14629d5011e63c1db1a4" FOREIGN KEY ("registrationCountryId") REFERENCES "country" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_02b52c4e9f7b1006d090a90c988" FOREIGN KEY ("ownershipFormId") REFERENCES "ownership_form" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_a4f80b4d63e97fc82fece398cdd" FOREIGN KEY ("roadAccidentId") REFERENCES "road_accident" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_car"("id", "color", "yearOfIssue", "weightWithoutLoad", "weightMaxPermitted", "odometerStatus", "mileage", "motorPower", "maxSpeed", "passengerCapacity", "carBrand", "carModel", "VIN", "chassisNumber", "vehicleBodyNumber", "engineNumber", "stateRegistrationPlate", "registrationCertificateNumber", "technicalFaults", "additionalEquipment", "tachographUsageDetails", "vehicleDamage", "contourMarking", "isCargoDangerous", "isLicenseAvailable", "isInsurancePolicyAvailable", "isSelfBalancingMechanism", "isDriverLeft", "isDriverWanted", "usageReason", "transportationCharacteristics", "transportationOrganizationMeasures", "organization", "INN", "legalForm", "registrationAddress", "vehicleTypeId", "vehicleCategoryId", "steeringWheelPositionId", "typeOfDriveId", "controlTypeId", "engineTypeId", "tireTypeId", "manufacturerCountryId", "registrationCountryId", "ownershipFormId", "roadAccidentId") SELECT "id", "color", "yearOfIssue", "weightWithoutLoad", "weightMaxPermitted", "odometerStatus", "mileage", "motorPower", "maxSpeed", "passengerCapacity", "carBrand", "carModel", "VIN", "chassisNumber", "vehicleBodyNumber", "engineNumber", "stateRegistrationPlate", "registrationCertificateNumber", "technicalFaults", "additionalEquipment", "tachographUsageDetails", "vehicleDamage", "contourMarking", "isCargoDangerous", "isLicenseAvailable", "isInsurancePolicyAvailable", "isSelfBalancingMechanism", "isDriverLeft", "isDriverWanted", "usageReason", "transportationCharacteristics", "transportationOrganizationMeasures", "organization", "INN", "legalForm", "registrationAddress", "vehicleTypeId", "vehicleCategoryId", "steeringWheelPositionId", "typeOfDriveId", "controlTypeId", "engineTypeId", "tireTypeId", "manufacturerCountryId", "registrationCountryId", "ownershipFormId", "roadAccidentId" FROM "car"`);
        await queryRunner.query(`DROP TABLE "car"`);
        await queryRunner.query(`ALTER TABLE "temporary_car" RENAME TO "car"`);
        await queryRunner.query(`CREATE TABLE "temporary_road_accident" ("id" varchar PRIMARY KEY NOT NULL, "accidentDatetime" datetime NOT NULL, "fullAddress" text NOT NULL, "population" real NOT NULL, "distance" text NOT NULL, "diedNumber" real NOT NULL, "injuredNumber" real NOT NULL, "accidentDescription" text NOT NULL, "scheme" text NOT NULL, "numberOfLanes" real NOT NULL, "accidentLane" real NOT NULL, "roadwayWidth" real NOT NULL, "sidewalkWidth" real NOT NULL, "dividerWidth" real NOT NULL, "roadsideWidth" real NOT NULL, "permissibleAxialLoad" text NOT NULL, "speedLimit" real NOT NULL, "roadNetworkObjects" text NOT NULL, "nearestEducationalOrganizations" text NOT NULL, "crossingName" text NOT NULL, "serviceOrganization" text NOT NULL, "crossingOwner" text NOT NULL, "isAttendantAvailable" boolean NOT NULL, "isControlsAvailable" boolean NOT NULL, "isSpecialTechnicalsAvailable" boolean NOT NULL, "isBarrierAvailable" boolean NOT NULL, "isFenceAvailable" boolean NOT NULL, "isTrafficLightsAvailable" boolean NOT NULL, "isRoadSignsAvailable" boolean NOT NULL, "geographicalCoordinates" text NOT NULL, "weatherCondition" text NOT NULL, "lighting" text NOT NULL, "roadwayCondition" text NOT NULL, "transportOperationalStateDisadvantages" text NOT NULL, "equippingDisadvantages" text NOT NULL, "responseTime" text NOT NULL, "inspectorsActions" text NOT NULL, "timeOfRegistration" time NOT NULL, "accidentTypeId" varchar NOT NULL, "settlementStatusId" varchar NOT NULL, "settlementTypeId" varchar NOT NULL, "streetCategoryId" varchar NOT NULL, "roadId" varchar NOT NULL, "coverTypeId" varchar NOT NULL, "dividerTypeId" varchar NOT NULL, "horizontalMarkupId" varchar NOT NULL, "temporaryMarkupId" varchar NOT NULL, "verticalMarkupId" varchar NOT NULL, "crossingCategoryId" varchar NOT NULL, "trafficPoliceOfficerId" varchar NOT NULL, CONSTRAINT "FK_8a3977bab93bd4b55b065a76dd4" FOREIGN KEY ("accidentTypeId") REFERENCES "accident_type" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_7d8ae978c814e675bdba18c27cb" FOREIGN KEY ("settlementStatusId") REFERENCES "settlement_status" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_93160b4cc4512665f9c34cf9b97" FOREIGN KEY ("settlementTypeId") REFERENCES "settlement_type" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_6c5c4c5d28eec66a19ce70a568a" FOREIGN KEY ("streetCategoryId") REFERENCES "street_category" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_7144cf1eebc5fc0d245a7d9c28d" FOREIGN KEY ("roadId") REFERENCES "road_category" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_750abf033b6ed390675ea98561c" FOREIGN KEY ("coverTypeId") REFERENCES "cover_type" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_51540931bae85b7779f20299720" FOREIGN KEY ("dividerTypeId") REFERENCES "divider_type" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_5485c5824671af9a2fa9bed2c5c" FOREIGN KEY ("horizontalMarkupId") REFERENCES "horizontal_markup" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_d832a59aa3f176dccf6b92a9c70" FOREIGN KEY ("temporaryMarkupId") REFERENCES "temporary_markup" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_00c43fb5c4380fe979db6aae918" FOREIGN KEY ("verticalMarkupId") REFERENCES "vertical_markup" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_27acea760648e68d42207ce2a94" FOREIGN KEY ("crossingCategoryId") REFERENCES "crossing_category" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_c70faf87d27b1c5b4fbd522e724" FOREIGN KEY ("trafficPoliceOfficerId") REFERENCES "user" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_road_accident"("id", "accidentDatetime", "fullAddress", "population", "distance", "diedNumber", "injuredNumber", "accidentDescription", "scheme", "numberOfLanes", "accidentLane", "roadwayWidth", "sidewalkWidth", "dividerWidth", "roadsideWidth", "permissibleAxialLoad", "speedLimit", "roadNetworkObjects", "nearestEducationalOrganizations", "crossingName", "serviceOrganization", "crossingOwner", "isAttendantAvailable", "isControlsAvailable", "isSpecialTechnicalsAvailable", "isBarrierAvailable", "isFenceAvailable", "isTrafficLightsAvailable", "isRoadSignsAvailable", "geographicalCoordinates", "weatherCondition", "lighting", "roadwayCondition", "transportOperationalStateDisadvantages", "equippingDisadvantages", "responseTime", "inspectorsActions", "timeOfRegistration", "accidentTypeId", "settlementStatusId", "settlementTypeId", "streetCategoryId", "roadId", "coverTypeId", "dividerTypeId", "horizontalMarkupId", "temporaryMarkupId", "verticalMarkupId", "crossingCategoryId", "trafficPoliceOfficerId") SELECT "id", "accidentDatetime", "fullAddress", "population", "distance", "diedNumber", "injuredNumber", "accidentDescription", "scheme", "numberOfLanes", "accidentLane", "roadwayWidth", "sidewalkWidth", "dividerWidth", "roadsideWidth", "permissibleAxialLoad", "speedLimit", "roadNetworkObjects", "nearestEducationalOrganizations", "crossingName", "serviceOrganization", "crossingOwner", "isAttendantAvailable", "isControlsAvailable", "isSpecialTechnicalsAvailable", "isBarrierAvailable", "isFenceAvailable", "isTrafficLightsAvailable", "isRoadSignsAvailable", "geographicalCoordinates", "weatherCondition", "lighting", "roadwayCondition", "transportOperationalStateDisadvantages", "equippingDisadvantages", "responseTime", "inspectorsActions", "timeOfRegistration", "accidentTypeId", "settlementStatusId", "settlementTypeId", "streetCategoryId", "roadId", "coverTypeId", "dividerTypeId", "horizontalMarkupId", "temporaryMarkupId", "verticalMarkupId", "crossingCategoryId", "trafficPoliceOfficerId" FROM "road_accident"`);
        await queryRunner.query(`DROP TABLE "road_accident"`);
        await queryRunner.query(`ALTER TABLE "temporary_road_accident" RENAME TO "road_accident"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "road_accident" RENAME TO "temporary_road_accident"`);
        await queryRunner.query(`CREATE TABLE "road_accident" ("id" varchar PRIMARY KEY NOT NULL, "accidentDatetime" datetime NOT NULL, "fullAddress" text NOT NULL, "population" real NOT NULL, "distance" text NOT NULL, "diedNumber" real NOT NULL, "injuredNumber" real NOT NULL, "accidentDescription" text NOT NULL, "scheme" text NOT NULL, "numberOfLanes" real NOT NULL, "accidentLane" real NOT NULL, "roadwayWidth" real NOT NULL, "sidewalkWidth" real NOT NULL, "dividerWidth" real NOT NULL, "roadsideWidth" real NOT NULL, "permissibleAxialLoad" text NOT NULL, "speedLimit" real NOT NULL, "roadNetworkObjects" text NOT NULL, "nearestEducationalOrganizations" text NOT NULL, "crossingName" text NOT NULL, "serviceOrganization" text NOT NULL, "crossingOwner" text NOT NULL, "isAttendantAvailable" boolean NOT NULL, "isControlsAvailable" boolean NOT NULL, "isSpecialTechnicalsAvailable" boolean NOT NULL, "isBarrierAvailable" boolean NOT NULL, "isFenceAvailable" boolean NOT NULL, "isTrafficLightsAvailable" boolean NOT NULL, "isRoadSignsAvailable" boolean NOT NULL, "geographicalCoordinates" text NOT NULL, "weatherCondition" text NOT NULL, "lighting" text NOT NULL, "roadwayCondition" text NOT NULL, "transportOperationalStateDisadvantages" text NOT NULL, "equippingDisadvantages" text NOT NULL, "responseTime" text NOT NULL, "inspectorsActions" text NOT NULL, "timeOfRegistration" time NOT NULL, "accidentTypeId" varchar NOT NULL, "settlementStatusId" varchar NOT NULL, "settlementTypeId" varchar NOT NULL, "streetCategoryId" varchar NOT NULL, "roadId" varchar NOT NULL, "coverTypeId" varchar NOT NULL, "dividerTypeId" varchar NOT NULL, "horizontalMarkupId" varchar NOT NULL, "temporaryMarkupId" varchar NOT NULL, "verticalMarkupId" varchar NOT NULL, "crossingCategoryId" varchar NOT NULL, "trafficPoliceOfficerId" varchar NOT NULL)`);
        await queryRunner.query(`INSERT INTO "road_accident"("id", "accidentDatetime", "fullAddress", "population", "distance", "diedNumber", "injuredNumber", "accidentDescription", "scheme", "numberOfLanes", "accidentLane", "roadwayWidth", "sidewalkWidth", "dividerWidth", "roadsideWidth", "permissibleAxialLoad", "speedLimit", "roadNetworkObjects", "nearestEducationalOrganizations", "crossingName", "serviceOrganization", "crossingOwner", "isAttendantAvailable", "isControlsAvailable", "isSpecialTechnicalsAvailable", "isBarrierAvailable", "isFenceAvailable", "isTrafficLightsAvailable", "isRoadSignsAvailable", "geographicalCoordinates", "weatherCondition", "lighting", "roadwayCondition", "transportOperationalStateDisadvantages", "equippingDisadvantages", "responseTime", "inspectorsActions", "timeOfRegistration", "accidentTypeId", "settlementStatusId", "settlementTypeId", "streetCategoryId", "roadId", "coverTypeId", "dividerTypeId", "horizontalMarkupId", "temporaryMarkupId", "verticalMarkupId", "crossingCategoryId", "trafficPoliceOfficerId") SELECT "id", "accidentDatetime", "fullAddress", "population", "distance", "diedNumber", "injuredNumber", "accidentDescription", "scheme", "numberOfLanes", "accidentLane", "roadwayWidth", "sidewalkWidth", "dividerWidth", "roadsideWidth", "permissibleAxialLoad", "speedLimit", "roadNetworkObjects", "nearestEducationalOrganizations", "crossingName", "serviceOrganization", "crossingOwner", "isAttendantAvailable", "isControlsAvailable", "isSpecialTechnicalsAvailable", "isBarrierAvailable", "isFenceAvailable", "isTrafficLightsAvailable", "isRoadSignsAvailable", "geographicalCoordinates", "weatherCondition", "lighting", "roadwayCondition", "transportOperationalStateDisadvantages", "equippingDisadvantages", "responseTime", "inspectorsActions", "timeOfRegistration", "accidentTypeId", "settlementStatusId", "settlementTypeId", "streetCategoryId", "roadId", "coverTypeId", "dividerTypeId", "horizontalMarkupId", "temporaryMarkupId", "verticalMarkupId", "crossingCategoryId", "trafficPoliceOfficerId" FROM "temporary_road_accident"`);
        await queryRunner.query(`DROP TABLE "temporary_road_accident"`);
        await queryRunner.query(`ALTER TABLE "car" RENAME TO "temporary_car"`);
        await queryRunner.query(`CREATE TABLE "car" ("id" varchar PRIMARY KEY NOT NULL, "color" text NOT NULL, "yearOfIssue" text NOT NULL, "weightWithoutLoad" text NOT NULL, "weightMaxPermitted" text NOT NULL, "odometerStatus" text NOT NULL, "mileage" real NOT NULL, "motorPower" text NOT NULL, "maxSpeed" real NOT NULL, "passengerCapacity" real NOT NULL, "carBrand" text NOT NULL, "carModel" text NOT NULL, "VIN" text NOT NULL, "chassisNumber" text NOT NULL, "vehicleBodyNumber" text NOT NULL, "engineNumber" text NOT NULL, "stateRegistrationPlate" text NOT NULL, "registrationCertificateNumber" text NOT NULL, "technicalFaults" text NOT NULL, "additionalEquipment" text NOT NULL, "tachographUsageDetails" text NOT NULL, "vehicleDamage" text NOT NULL, "contourMarking" text NOT NULL, "isCargoDangerous" boolean NOT NULL, "isLicenseAvailable" boolean NOT NULL, "isInsurancePolicyAvailable" boolean NOT NULL, "isSelfBalancingMechanism" boolean NOT NULL, "isDriverLeft" boolean NOT NULL, "isDriverWanted" boolean NOT NULL, "usageReason" text NOT NULL, "transportationCharacteristics" text NOT NULL, "transportationOrganizationMeasures" text NOT NULL, "organization" text NOT NULL, "INN" text NOT NULL, "legalForm" text NOT NULL, "registrationAddress" text NOT NULL, "vehicleTypeId" varchar NOT NULL, "vehicleCategoryId" varchar NOT NULL, "steeringWheelPositionId" varchar NOT NULL, "typeOfDriveId" varchar NOT NULL, "controlTypeId" varchar NOT NULL, "engineTypeId" varchar NOT NULL, "tireTypeId" varchar NOT NULL, "manufacturerCountryId" varchar NOT NULL, "registrationCountryId" varchar NOT NULL, "ownershipFormId" varchar NOT NULL, "roadAccidentId" varchar NOT NULL)`);
        await queryRunner.query(`INSERT INTO "car"("id", "color", "yearOfIssue", "weightWithoutLoad", "weightMaxPermitted", "odometerStatus", "mileage", "motorPower", "maxSpeed", "passengerCapacity", "carBrand", "carModel", "VIN", "chassisNumber", "vehicleBodyNumber", "engineNumber", "stateRegistrationPlate", "registrationCertificateNumber", "technicalFaults", "additionalEquipment", "tachographUsageDetails", "vehicleDamage", "contourMarking", "isCargoDangerous", "isLicenseAvailable", "isInsurancePolicyAvailable", "isSelfBalancingMechanism", "isDriverLeft", "isDriverWanted", "usageReason", "transportationCharacteristics", "transportationOrganizationMeasures", "organization", "INN", "legalForm", "registrationAddress", "vehicleTypeId", "vehicleCategoryId", "steeringWheelPositionId", "typeOfDriveId", "controlTypeId", "engineTypeId", "tireTypeId", "manufacturerCountryId", "registrationCountryId", "ownershipFormId", "roadAccidentId") SELECT "id", "color", "yearOfIssue", "weightWithoutLoad", "weightMaxPermitted", "odometerStatus", "mileage", "motorPower", "maxSpeed", "passengerCapacity", "carBrand", "carModel", "VIN", "chassisNumber", "vehicleBodyNumber", "engineNumber", "stateRegistrationPlate", "registrationCertificateNumber", "technicalFaults", "additionalEquipment", "tachographUsageDetails", "vehicleDamage", "contourMarking", "isCargoDangerous", "isLicenseAvailable", "isInsurancePolicyAvailable", "isSelfBalancingMechanism", "isDriverLeft", "isDriverWanted", "usageReason", "transportationCharacteristics", "transportationOrganizationMeasures", "organization", "INN", "legalForm", "registrationAddress", "vehicleTypeId", "vehicleCategoryId", "steeringWheelPositionId", "typeOfDriveId", "controlTypeId", "engineTypeId", "tireTypeId", "manufacturerCountryId", "registrationCountryId", "ownershipFormId", "roadAccidentId" FROM "temporary_car"`);
        await queryRunner.query(`DROP TABLE "temporary_car"`);
        await queryRunner.query(`ALTER TABLE "accident_participant" RENAME TO "temporary_accident_participant"`);
        await queryRunner.query(`CREATE TABLE "accident_participant" ("id" varchar PRIMARY KEY NOT NULL, "vehicleParticipant" text NOT NULL, "drivingExperience" real NOT NULL, "drivingTime" text NOT NULL, "driverLicense" text NOT NULL, "medicalOrderNumber" text NOT NULL, "passengerSeatVehicle" text NOT NULL, "pedestrianLocation" text NOT NULL, "pedestrianDirection" text NOT NULL, "inattentiveFactors" text NOT NULL, "trafficViolations" text NOT NULL, "legalDecision" text NOT NULL, "severityConsequencesAccident" text NOT NULL, "medicalOrganizationName" text NOT NULL, "isMedicalOrganizationDelivery" boolean NOT NULL, "isMedicalAidAccident" boolean NOT NULL, "isSpecialEquipment" boolean NOT NULL, "isSeatBeltFastened" boolean NOT NULL, "isDangerousCargoAdmission" boolean NOT NULL, "isPassengerFall" boolean NOT NULL, "isReflectiveElementsAvailable" boolean NOT NULL, "isChildSeatFastened" boolean NOT NULL, "isDriverWanted" boolean NOT NULL, "isDriverDrunk" boolean NOT NULL, "isParticipantLeftDetected" boolean NOT NULL, "isAccidentLeft" boolean NOT NULL, "participantCategoryId" varchar NOT NULL, "roadAccidentId" varchar NOT NULL)`);
        await queryRunner.query(`INSERT INTO "accident_participant"("id", "vehicleParticipant", "drivingExperience", "drivingTime", "driverLicense", "medicalOrderNumber", "passengerSeatVehicle", "pedestrianLocation", "pedestrianDirection", "inattentiveFactors", "trafficViolations", "legalDecision", "severityConsequencesAccident", "medicalOrganizationName", "isMedicalOrganizationDelivery", "isMedicalAidAccident", "isSpecialEquipment", "isSeatBeltFastened", "isDangerousCargoAdmission", "isPassengerFall", "isReflectiveElementsAvailable", "isChildSeatFastened", "isDriverWanted", "isDriverDrunk", "isParticipantLeftDetected", "isAccidentLeft", "participantCategoryId", "roadAccidentId") SELECT "id", "vehicleParticipant", "drivingExperience", "drivingTime", "driverLicense", "medicalOrderNumber", "passengerSeatVehicle", "pedestrianLocation", "pedestrianDirection", "inattentiveFactors", "trafficViolations", "legalDecision", "severityConsequencesAccident", "medicalOrganizationName", "isMedicalOrganizationDelivery", "isMedicalAidAccident", "isSpecialEquipment", "isSeatBeltFastened", "isDangerousCargoAdmission", "isPassengerFall", "isReflectiveElementsAvailable", "isChildSeatFastened", "isDriverWanted", "isDriverDrunk", "isParticipantLeftDetected", "isAccidentLeft", "participantCategoryId", "roadAccidentId" FROM "temporary_accident_participant"`);
        await queryRunner.query(`DROP TABLE "temporary_accident_participant"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "road_accident"`);
        await queryRunner.query(`DROP TABLE "car"`);
        await queryRunner.query(`DROP TABLE "accident_participant"`);
        await queryRunner.query(`DROP TABLE "control_type"`);
        await queryRunner.query(`DROP TABLE "type_of_drive"`);
        await queryRunner.query(`DROP TABLE "tire_type"`);
        await queryRunner.query(`DROP TABLE "engine_type"`);
        await queryRunner.query(`DROP TABLE "ownership_form"`);
        await queryRunner.query(`DROP TABLE "vehicle_type"`);
        await queryRunner.query(`DROP TABLE "country"`);
        await queryRunner.query(`DROP TABLE "vehicle_category"`);
        await queryRunner.query(`DROP TABLE "steering_wheel_position"`);
        await queryRunner.query(`DROP TABLE "participant_category"`);
        await queryRunner.query(`DROP TABLE "crossing_category"`);
        await queryRunner.query(`DROP TABLE "temporary_markup"`);
        await queryRunner.query(`DROP TABLE "vertical_markup"`);
        await queryRunner.query(`DROP TABLE "horizontal_markup"`);
        await queryRunner.query(`DROP TABLE "divider_type"`);
        await queryRunner.query(`DROP TABLE "cover_type"`);
        await queryRunner.query(`DROP TABLE "road_category"`);
        await queryRunner.query(`DROP TABLE "street_category"`);
        await queryRunner.query(`DROP TABLE "settlement_status"`);
        await queryRunner.query(`DROP TABLE "settlement_type"`);
        await queryRunner.query(`DROP TABLE "accident_type"`);
    }

}