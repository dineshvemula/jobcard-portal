# jobcard-portal
jobcardPortal - create, update,assign and status of FIFO for department .

## Installation
- Git Installation
- Node 
- Mysql

## Git Setup
- singnup to GIT
- Create the repository
- generate ssh key using $ssh-keygen

## Node Setup
- http://expressjs.com/en/starter/generator.html //URL for npm installation
	-To know more -> npmjs.org

- $npm install //install all package listed in package.json
- $express app -e //generate express application

## Git Workflow
- [bash]$git clone [url] //Download project folder into local repository
- [bash]$git config --global user.email "your registered git email id"
- [bash]$git config --global user.name "your registered git username"
- [bash]$git status //if any changes made in project folder, those files are displaying
- [bash]$git -m "give a detail description or comment for those changed files"
- [bash]$git push origin master//origin master means parent folder of project files

//cmd for if we want to commit and push for single files, then use this below instuction.
- Working Directory and Staging Area or Index
	- Let us see the basic workflow of Git.
		Step 1: You modify a file from the working directory.
		Step 2: You add these files to the staging area.
		Step 3: You perform commit operation that moves the files from the staging
		area. After push operation, it stores the changes permanently to the Git
		repository.

				->Working directory
						|Git add operation
						V
				->staging area
						|Git commit operation
						V
				->Git repository

		Ex:
			Suppose you modified two files, namely “sort.c” and “search.c” and you want two different commits for each operation. You can add one file in the staging area and do commit. After the first commit, repeat the same procedure for another file.

			# First commit
			[bash]$ git add sort.c
			# adds file to the staging area
			[bash]$ git commit –m “Added sort operation”
			# Second commit
			[bash]$ git add search.c
			# adds file to the staging area
			[bash]$ git commit –m “Added search operation”

##Launch Git Bash from Windows Command Window?
	- > start "" "%ProgramFiles%\Git\bin\sh.exe" --login