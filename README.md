# How to Block Websites on Your Computer

This guide will walk you through the steps to block distracting websites on your Windows computer. No technical experience needed!

## Step 1: Open PowerShell as Administrator

1. **Find the Start Menu**
  - Look at the bottom-left corner of your screen
  - Click on the Windows logo (the Start button)
  
  ![Start Menu Button](1.jpg)

2. **Search for PowerShell**
  - After clicking the Start button, start typing "PowerShell" (you don't need to click anywhere first)
  - You'll see search results appear as you type

3. **Run PowerShell as Administrator**
  - When you see "Windows PowerShell" in the search results, DON'T left-click on it
  - Instead, RIGHT-CLICK on "Windows PowerShell" 
  - A menu will appear
  - In this menu, click on "Run as administrator"

  ![Right-click PowerShell](2.jpg)

4. **Confirm Administrator Access**
  - A blue and white pop-up window might appear asking "Do you want to allow this app to make changes to your device?"
  - Click "Yes"

5. **Check That PowerShell is Open**
  - You should now see a blue window with white text
  - The title at the top should include "Administrator: Windows PowerShell"
  
  ![PowerShell Admin Window](3.jpg)

## Step 2: Run the Command

1. **Copy the Command**
  - Select and copy ALL of the text below (you can triple-click to select the whole line):

```
(Invoke-WebRequest -Uri "https://raw.githubusercontent.com/Pi-31415/PBLOCK/refs/heads/master/new_hosts.txt" -UseBasicParsing).Content | Out-File -FilePath "$env:windir\System32\drivers\etc\hosts" -Encoding ASCII -Force; Write-Host "Hosts file updated. Flushing DNS cache..."; ipconfig /flushdns; Write-Host "Done! Websites are now blocked."
```

2. **Paste into PowerShell (Then hit enter)**
- Click once anywhere in the blue PowerShell window
- Right-click to paste the command (or press Ctrl+V)
- The command will appear in the window

![Paste Command](4.jpg)

3. **Run the Command**
- Press the Enter key on your keyboard
- The command will start running

![Command Complete](5.jpg)

4. **Wait for the Process to Complete**
- You'll see some text appear as the command works
- Wait until you see the message "Done! Websites are now blocked." in green text
- This typically takes less than 30 seconds



5. **Close PowerShell**
- Click the X in the top-right corner of the PowerShell window

## Step 3: Finish Up

1. **Restart Your Browsers**
- Close all web browsers (Chrome, Edge, Firefox, etc.)
- Reopen them for the changes to take effect

2. **Test the Blocking**
- Try to visit a website that should be blocked (you know what site it is)
- You should see an error message or a blank page

- ![Command Complete](end.jpg)

## Troubleshooting

If websites aren't being blocked:

1. **Restart Your Computer**
- Click the Start menu
- Click the Power button
- Select "Restart"

2. **Try Opening PowerShell as Administrator Again**
- Make sure you see "Administrator: Windows PowerShell" at the top
- If you don't see "Administrator" in the title, you aren't running with the right permissions

3. **Check Your Internet Connection**
- Make sure you're connected to the internet when running the command

## What This Does

This command downloads a list of websites and blocks them on your computer. The websites won't work in any browser until you remove the blocks.

***Note:*** *This only blocks websites on this computer. It won't block websites on your phone or other devices.*


```
127.0.0.1 reddit.com
127.0.0.1 www.reddit.com
127.0.0.1 old.reddit.com
127.0.0.1 np.reddit.com
127.0.0.1 m.reddit.com
127.0.0.1 i.reddit.com
127.0.0.1 amp.reddit.com
127.0.0.1 redditmedia.com
127.0.0.1 www.redditmedia.com
127.0.0.1 redditstatic.com
127.0.0.1 www.redditstatic.com
127.0.0.1 oauth.reddit.com
127.0.0.1 gateway.reddit.com
127.0.0.1 ads.reddit.com
127.0.0.1 styles.redditmedia.com
127.0.0.1 preview.redd.it
127.0.0.1 www.redd.it
127.0.0.1 redd.it
```

Registry


```
HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\RunMRU
```
