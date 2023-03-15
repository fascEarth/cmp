

    <?php
if ($allowscripts)
{
    if ($allowscripts['advancedscript'])
    {
        for ($i = 0;$i < count($allowscripts['advancedscript']);$i++)
        {
            if ($allowscripts['advancedscript'][$i] == 'googleapis' || $allowscripts['advancedscript'][$i] == 'three' || $allowscripts['advancedscript'][$i] == 'threeOrbitControls' || $allowscripts['advancedscript'][$i] == 'threeMeshLine')
            {
                echo '<script ' . $advancedScripts[$allowscripts['advancedscript'][$i]]['other'] . '
            type="' . $advancedScripts[$allowscripts['advancedscript'][$i]]['type'] . '" src="' . $advancedScripts[$allowscripts['advancedscript'][$i]]['src'] . '"></script>';
            }
            else
            {
                echo '<script ' . $advancedScripts[$allowscripts['advancedscript'][$i]]['other'] . '
            type="' . $advancedScripts[$allowscripts['advancedscript'][$i]]['type'] . '" src="' . $advancedScripts[$allowscripts['advancedscript'][$i]]['src'] . '" integrity="' . $advancedScripts[$allowscripts['advancedscript'][$i]]['integrity'] . '"
            crossorigin="' . $advancedScripts[$allowscripts['advancedscript'][$i]]['crossorigin'] . '" charset="' . $advancedScripts[$allowscripts['advancedscript'][$i]]['charset'] . '"></script>';
            }
        }
    }
    if ($allowscripts['script'])
    {
        for ($i = 0;$i < count($allowscripts['script']);$i++)
        {
            echo '<script src="' . $scripts[$allowscripts['script'][$i]] . '"></script>';
        }

    }

    if ($allowscripts['devScript'])
    {
        for ($i = 0;$i < count($allowscripts['devScript']);$i++)
        {
            echo '<script src="' . $devScripts[$allowscripts['devScript'][$i]]['src'] . '"></script>';
        }
    }
}

?>

