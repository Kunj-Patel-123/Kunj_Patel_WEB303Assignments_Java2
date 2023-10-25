/*
Assignment 05
Name : Kunj Patel
SNum : 0828761
Date : 2023-10-25
*/

$(document).ready(function () {
    // Your code for the assignment goes here

    class ContentItem {
        constructor(id, name, description, categoryGenre) {
            this.id = id;
            this.name = name;
            this.description = description;
            this.categoryGenre = categoryGenre;
        }

        updateContentItem(id, name, description, categoryGenre) {
            if (id === this.id) {
                if (name !== null) {
                    this.name = name;
                }
                if (description !== null) {
                    this.description = description;
                }
                if (categoryGenre !== null) {
                    this.categoryGenre = categoryGenre;
                }
            }
        }

        toString() {
            return `<div class="content-item-wrapper" id="content-item-${this.id}">
          <h2>${this.name}</h2>
          <p>${this.description}</p>
          <div>${this.categoryGenre}</div>
        </div>`;
        }
    }

    const contentItems = [
        new ContentItem(0, "Sedan", "A comfortable and spacious family car.", "Family"),
        new ContentItem(1, "Sports Car", "A high-performance vehicle for thrill-seekers.", "Sports"),
        new ContentItem(2, "SUV", "An all-terrain sport utility vehicle.", "Off-Road"),
        new ContentItem(3, "Electric Car", "Environmentally friendly and efficient transportation.", "Electric"),
        new ContentItem(4, "Classic Car", "Vintage cars with timeless appeal.", "Classic"),
    ];

    const contentItemList = $("#content-item-list");

    contentItems.forEach((contentItem) => {
        const itemHtml = contentItem.toString();
        const $item = $(itemHtml);

        // Apply styles to each content item
        $item.css({
            border: "2px solid #245DDE",
            width: "300px",
            padding: "10px",
            margin: "10px auto",
        });

        contentItemList.append($item);



        // Handle button clicks for successful and unsuccessful updates

        $("#successfulUpdateButton").click(function () {
            contentItems[0].updateContentItem(0, "Updated Sedan", null, null);
            contentItemList.empty();
            contentItems.forEach((contentItem) => {
                const itemHtml = contentItem.toString();
                const $item = $(itemHtml);
                $item.css({
                    border: "1px solid #5378CC",
                    width: "300px",
                    padding: "10px",
                    margin: "10px auto",
                });
                contentItemList.append($item);
            });
        });

        $("#unsuccessfulUpdateButton").click(function () {
            contentItems[1].updateContentItem(0, "Attempted Update", null, null);
        });
    });
});
