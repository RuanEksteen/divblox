<?php
require("../../../../divblox/divblox.php");
class CategoryController extends EntityDataSeriesComponentController {
    protected $EntityNameStr = "Category";
    protected $IncludedAttributeArray = ["CategoryName","TotalExpenses",];
    protected $IncludedRelationshipArray = [];
    protected $ConstrainByArray = [];
    protected $RequiredAttributeArray = [];
    protected $NumberValidationAttributeArray = [];

    public function __construct($ComponentNameStr = 'Component') {
        parent::__construct($ComponentNameStr);
    }
}
$ComponentObj = new CategoryController("category_totals");
?>