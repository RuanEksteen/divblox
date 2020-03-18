<?php
require("../../../../divblox/divblox.php");

class CategoryUpdateController extends ProjectComponentController
{
    public function __construct($ComponentNameStr = 'Component')
    {
        parent::__construct($ComponentNameStr);
    }

    public function getBreadCrumbs() {
        $InputCategoryInt = $this->getInputValue("category_id", true);
//        $CategoryObj = Category::QuerySingle(
//            dxQ::Equal(
//                dxQN::Category()->Id,
//                $InputCategoryInt
//            ),
//            dxQ::Clause(
//                dxQ::Select(
//                    dxQN::Category()->Id,
//                    dxQN::Category()->CategoryLabel,
//                    dxQN::Category()->CategoryParentId
//                )
//            )
//        );

        $CategoryObj = Category::Load($InputCategoryInt);

        $ReturnArr = ProjectFunctions::getBreadCrumbsRecursive($CategoryObj);

        $ReturnArr = array_reverse($ReturnArr);

//        while (!is_null($CategoryObj->CategoryParentId) && $CategoryObj->CategoryParentId !== -1) {
//            $ReturnArr[] = [$CategoryObj->CategoryLabel, $CategoryObj->Id, $CategoryObj->CategoryParentId];
//            $CategoryObj = Category::QuerySingle(
//                dxQ::Equal(
//                    dxQN::Category()->Id,
//                    $CategoryObj->CategoryParentId
//                ),
//                dxQ::Clause(
//                    dxQ::Select(
//                        dxQN::Category()->CategoryLabel,
//                        dxQN::Category()->CategoryParentId
//                    )
//                )
//            );
//        }

//        if ($ReturnArr == null) {
//            $ReturnArr[$CategoryObj->Id] = $CategoryObj->CategoryLabel;
//        }

        $this->setReturnValue("Result", "Success");
        $this->setReturnValue("ReturnData", $ReturnArr);
        $this->presentOutput();
    }

}

$ComponentObj = new CategoryUpdateController("category_update");
?>