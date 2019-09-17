@echo off
REM destination folder where matching files will be dumped
set "destination=C:\Temp\OTHERS"

REM input directory
FOR /R "C:\Temp\" %%F IN (*) DO (
	setlocal enabledelayedexpansion    
	
	REM Supply the filenames in between the double quotes
	REM Ex. it will find files that contains "eric" and "3" as filenames
	echo %%F|findstr "eric 3 Custom" >nul
	if not errorlevel 1 (
		echo Moving "%%F" to "%destination%"
		move /y "%%F" "%destination%"	
	)
	endlocal	
)
