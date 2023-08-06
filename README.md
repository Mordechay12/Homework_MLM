# Homework_MLM
Custom Build Task
• I wrote the C# project to sort 2 files located in the bin directory and print them as required.
• I saved the project in the configuration management of Azure DevOps under my account, in a new organization that I created.
• I built an Extension using the command "tfx extension create --manifest-globs vss-extension.json" after creating the required files and defining them manually. I shared it with the organization I created and used it.
• In the script I wrote inside the Custom Task, I made sure that the content of the AssemblyInfo file actually changes by adding code to read the file again after performing the required functionality and print its contents. (This is not required, but it helped me, and I assumed it wouldn't harm, so I kept it).
• I created a Pipeline that ran the Custom Task as required.
• I uploaded to GitHub:
  o The YAML file with which the Pipeline was run.
  o The vsix file (binary).
  o A directory containing files to create the vsix file (source code).
  o The sorting project.
