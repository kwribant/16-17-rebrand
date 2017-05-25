<?
function getTitle($stub) {
  $base_title = "Design + Dev by Kyle Ribant";
  $pathToTitle = array(
    "arbor" => "Arbor",
    "dropbox-business-downgrade-redesign" => "Dropbox Business Downgrade Redesign",
    "dropbox-business-redesign" => "Dropbox Business Redesign",
    "dropabout-redesign" => "Dropabout Redesign",
  );
  $project_title = $pathToTitle[$stub];
  $final_title = $base_title;
  if ($project_title)
    $final_title = $project_title . " 💕 " . $base_title;

  return $final_title;
}

function getDescription($stub) {
  $base_description = "Kyle Ribant is an engineer and UI/UX designer in the SF Bay Area.";
  $pathToDescription = array(
    "arbor" => "Learn more about Arbor, the component library and SCSS framework paired as a source of truth for development and design.",
    "dropbox-business-downgrade-redesign" => "Learn more about the redesign and re-architecture of Dropbox Business’ downgrade experience.",
    "dropbox-business-redesign" => "Learn more about Dropbox Business's 2015 visual overhaul.",
    "dropabout-redesign" => "Learn more about the redesign of Dropbox’s internal employee catalog.",
  );
  $project_description = $pathToDescription[$stub];
  $final_description = $base_description;
  if ($project_description)
    $final_description = $project_description . ' ' . $base_description;

  return $final_description;
}
?>
