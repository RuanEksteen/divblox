<?php
require("../../../../divblox/divblox.php");
require(FRAMEWORK_ROOT_STR.'/assets/php/database_helper.class.php');
require_once(DATA_MODEL_CLASS_PATH_STR);
class ApiOperationController extends ProjectComponentController {
    protected $DataModelObj;
    protected $RequiredAttributeArray = ['OperationName',];
    protected $NumberValidationAttributeArray = [];
    public function __construct($ComponentNameStr = 'Component') {
        $this->DataModelObj = new DataModel();
        parent::__construct($ComponentNameStr);
    }
    public function getObjectData() {
        $this->setReturnValue("Result","Success");
        $this->setReturnValue("Message","");
        
        $this->presentOutput();
    }
    
    public function saveObjectData() {
        if (is_null($this->getInputValue("ObjectData"))) {
            $this->setReturnValue("Result","Failed");
            $this->setReturnValue("Message","No ApiOperation object provided");
            $this->presentOutput();
        }
        $ApiOperationObj = json_decode($this->getInputValue("ObjectData"),true);
        $ApiOperationToCreateObj = new ApiOperation();
        foreach($ApiOperationToCreateObj->getIterator() as $Attribute => $Value) {
            if (in_array($Attribute, ProjectFunctions::get_divblox_Attributes())) {
                continue;
            }
            if (isset($ApiOperationObj[$Attribute])) {
                if (in_array($Attribute, $this->RequiredAttributeArray)) {
                    if (strlen($ApiOperationObj[$Attribute]) == 0) {
                        $this->setReturnValue("Result","Failed");
                        $this->setReturnValue("Message","$Attribute not provided");
                        $this->presentOutput();
                    }
                }
                if (in_array($Attribute, $this->NumberValidationAttributeArray)) {
                    if (!is_numeric($ApiOperationObj[$Attribute])) {
                        $this->setReturnValue("Result","Failed");
                        $this->setReturnValue("Message","$Attribute must be numeric");
                        $this->presentOutput();
                    }
                }
                if (in_array($this->DataModelObj->getEntityAttributeType("ApiOperation", $Attribute),["DATE","DATETIME"])) {
                    if (is_string($ApiOperationObj[$Attribute]) && (strlen($ApiOperationObj[$Attribute]) > 0)) {
                        $DateObj = new dxDateTime($ApiOperationObj[$Attribute]);
                        $ApiOperationToCreateObj->$Attribute = $DateObj;
                    }
                } else {
                    $ApiOperationToCreateObj->$Attribute = $ApiOperationObj[$Attribute];
                }
            } elseif (in_array($Attribute, $this->RequiredAttributeArray)) {
                $this->setReturnValue("Result","Failed");
                $this->setReturnValue("Message","$Attribute not provided");
                $this->presentOutput();
            }
        }
        
        $ApiOperationToCreateObj->Save();
        $this->setReturnValue("Result","Success");
        $this->setReturnValue("Message","Object created");
        $this->setReturnValue("Id",$ApiOperationToCreateObj->Id);
        $this->presentOutput();
    }
}
$ComponentObj = new ApiOperationController("api_operation_administration_create");
?>