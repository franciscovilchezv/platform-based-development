# Terminal 101 (for Windows w/ Ubuntu WSL)

## File types

There are two (for now) type of files:

- Regular: Files that contain data, e.g. txt files, png, jpg, etc...
- Directories: Also called folders. They contain files. Their name end with '/'. e.g. Documents/ Pictures/ etc....

## File Hierarchy

It's important to learn how are the diretories (folders) structured in your computer.

![](https://docs.oracle.com/cd/E19253-01/806-7612/images/Files.fig154.epsi.gif)

The initial folder that includes all other directories in your computer is called root, and its represented by a slash (/).

If you want to reference a folder while using a command, you need to specify the full path you will need to travel to get there from the root.

For example, if you want to reference the 'home' directory, according the picture shown you will need to use:

'/export/home/'

Which means:
Go to '/', then to 'export/' and then to 'home/'.

## Basics commands

- `echo`: Print a message
- `pwd`: Current directory
- `ls`: List files
- `touch`: Create empty file
- `mkdir`: Create directory
- `mv`: Move or rename a file or directory

- `cd`: Change directory
- `ls -a`: List files, include hidden files
- `.` and `..`: Current and previous directory
- `~`: Reference to your HOME directory

**WARNING: `rm` PERMANENTLY DELETES! You CANNOT recover anything when you use `rm`. I recommend to `mkdir OLD` to make a trash directory OLD and `mv` older/uneeded files/directories there. You can always delete them later.**

- `rm`: Delete
- `rm -r`: Delete recursively (used for deleting directories)
- `man`: Open the manual page for a command
- `cat`: Concatenate files and show content in the screen


